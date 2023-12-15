import express from "express";
import Order from "../models/orderModel.js";
const router = express.Router();
import Stripe from "stripe";
import * as dotenv from "dotenv";
dotenv.config();

const stripe = Stripe(
  "sk_test_51O6v30SCTZlpp0ghbkCN87YLaxACAclKJDj96LRELtC6h968oQL8JgnrDBSCoXt8B6lpD5gGT1wsBb259KhS3PPG00sYDbeyAH"
);
const webhookSecret =
  "whsec_c74c8eda6f09aeffcf12f874d97b04c39449317068c6e8cdf28c28d6a1ead002";

const createOrder = async (customer, data) => {
  const Items = JSON.parse(customer.metadata.cart);
  console.log(Items);
  const products = Items.map((item) => {
    return {
      productId: item.id,
      name: item.name,
      quantity: item.quantity,
    };
  });

  const newOrder = new Order({
    userId: customer.metadata.userId,
    customerId: data.customer,
    paymentIntentId: data.payment_intent,
    products,
    subtotal: data.amount_subtotal,
    total: data.amount_total,
    shipping: data.customer_details,
    payment_status: data.payment_status,
  });

  try {
    const savedOrder = await newOrder.save();
    console.log("Processed Order:", savedOrder);
  } catch (err) {
    console.log(err);
  }
};

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    let data;
    let eventType;

    if (webhookSecret) {
      // Retrieve the event by verifying the signature using the raw body and secret.
      let event;
      let signature = req.headers["stripe-signature"];
      // console.log(req.body);
      // console.log(signature);
      try {
        event = stripe.webhooks.constructEvent(
          req.body,
          signature,
          webhookSecret
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed:  ${err}`);
        return res.sendStatus(400);
      }
      // Extract the object from the event.
      data = event.data.object;
      eventType = event.type;
    } else {
      // Webhook signing is recommended, but if the secret is not configured in `config.js`,
      // retrieve the event data directly from the request body.
      data = req.body.data.object;
      eventType = req.body.type;
    }

    // Handle the checkout.session.completed event
    if (eventType === "checkout.session.completed") {
      stripe.customers
        .retrieve(data.customer)
        .then(async (customer) => {
          try {
            // CREATE ORDER
            createOrder(customer, data);
          } catch (err) {
            console.log(typeof createOrder);
            console.log(err);
          }
        })
        .catch((err) => console.log(err.message));
    }

    res.status(200).end();
  }
);

export default router;
