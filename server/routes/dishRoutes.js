import express from "express";
import dishModel from "../models/dishModel.js";

const router = express.Router();
//getAlldishes || @GET_DISHES_REQUEST

router.get("/getAllDishes", async (req, res) => {
  try {
    const dishes = await dishModel.find({});
    res.send(dishes);
  } catch (error) {
    res.json({ message: error });
  }
});

export default router;
