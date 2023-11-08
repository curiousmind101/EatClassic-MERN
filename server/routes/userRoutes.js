import express from "express";
const router = express.Router();
import userModel from "../models/userModel.js";

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new userModel({ name, email, password });
  try {
    const findUser = await userModel.findOne({ email });
    if (findUser) {
      res.status(409).json({
        message: "User Already Exist",
      });
    } else {
      try {
        newUser.save();
        res.status(200).json({
          success: true,
          message: "registration succussful",
        });
      } catch (error) {
        res.status(400).json({
          message: error,
        });
      }
    }
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
  // res.status(200).json({
  //   message: "user registered succussfully",
  // });
});

router.get("/register", (req, res) => {
  res.send("<h1>main register hu</h1>");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);
  try {
    const user = await userModel.find({ email, password });
    // console.log(user, "this is the message from login");
    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        _id: user[0]._id,
        isAdmin: user[0].isAdmin,
      };
      res.status(200).send(currentUser);
    } else {
      res.status(400).json({
        message: "Invalid user name or Password",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong",
    });
  }
});
export default router;
