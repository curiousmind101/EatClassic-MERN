// import express from "express";
import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    userid: {
      type: String,
      required: true,
    },
    orderItems: [],

    shippingAddress: {
      type: Object,
      required: true,
    },
    isDelivered: {
      type: Boolean,
      required: true,
    },
    orderAmount: {
      type: Number,
      required: true,
    },
    trasactionId: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const orderModel = mongoose.model("order", orderSchema);

export default orderModel;
