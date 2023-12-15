import express from "express";
import Order from "../models/orderModel.js";
const router = express.Router();
import Stripe from "stripe";
import * as dotenv from "dotenv";
dotenv.config();
//es-lint
const stripe = Stripe(
  "sk_test_51O6v30SCTZlpp0ghbkCN87YLaxACAclKJDj96LRELtC6h968oQL8JgnrDBSCoXt8B6lpD5gGT1wsBb259KhS3PPG00sYDbeyAH"
);
router.post("/create-checkout-session", async (req, res) => {
  const { products, userId } = req.body;
  // console.log(products, userId);

  const cartItmes = products.map((item) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: item.name,
      },
      unit_amount: item.price[0] * 100,
    },
    quantity: item.quantity,
  }));

  const customer = await stripe.customers.create({
    metadata: {
      userId: userId,
      cart: JSON.stringify(products),
    },
  });

  //   console.log(cartItmes);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "IN", "ID"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "inr",
          },
          display_name: "Free shipping",
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
    customer: customer.id,
    line_items: cartItmes,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });
  // console.log(session);

  res.json({ id: session.id });
});

router.post("/orders", async (req, res) => {
  // console.log(req.body);
  const userId = req.body._id;
  // console.log("server: hit");
  try {
    const orders = await Order.find({ userId });
    // console.log(orders);
    res.send(orders);
  } catch (error) {
    res.json({ message: error });
  }
});

export default router;
