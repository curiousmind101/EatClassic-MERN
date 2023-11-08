import express from "express";
import orderModel from "../models/orderModel.js";
const router = express.Router();
import Stripe from "stripe";
import * as dotenv from "dotenv";
dotenv.config();
//es-lint
const stripe = Stripe(
  "sk_test_51O6v30SCTZlpp0ghbkCN87YLaxACAclKJDj96LRELtC6h968oQL8JgnrDBSCoXt8B6lpD5gGT1wsBb259KhS3PPG00sYDbeyAH"
);
router.post("/create-checkout-session", async (req, res) => {
  const { products, address } = req.body;
  //   console.log(process.env.STRIPE_SEC);
  //   console.log(products);
  console.log(address);
  const cartItmes = products.map((item) => ({
    price_data: {
      currency: "INR",
      product_data: {
        name: item.name,
      },
      unit_amount: item.price[0] * 100,
    },
    quantity: item.quantity,
  }));

  //   console.log(cartItmes);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: cartItmes,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });
  console.log(session);

  res.json({ id: session.id });
});

export default router;
