import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import ConnectDB from "./config/config.js";
import dishRouter from "./routes/dishRoutes.js";
import userRouter from "./routes/userRoutes.js";
import paymentRouter from "./routes/paymentRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import cors from "cors";
//dotenv configuration
dotenv.config();

//importing environment variables from
const url = process.env.MONGO_URI;
const port = process.env.PORT;

ConnectDB(url);

const app = express();
app.use(cors());
app.use("/api/payment/", orderRoutes);
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/dishes/", dishRouter);
app.use("/api/user/", userRouter);
app.use("/api/payment", paymentRouter);

app.get("/", (req, res) => {
  res.send(`<h1>Hello from server</h1>`);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
