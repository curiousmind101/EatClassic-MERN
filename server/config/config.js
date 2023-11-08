// const mongoose = require('mongoose');
import mongoose from "mongoose";
// import * as dotenv from 'dotenv';

const ConnectDB = async (url) => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(url);
    console.log(`mongoDB atlas is connected at ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

export default ConnectDB; //passing reference not calling
// module.exports = ConnectDB;
