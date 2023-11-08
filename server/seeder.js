import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import dishModel from "./models/dishModel.js";
import { dishData } from "./data/dishData.js";
import ConnectDB from "./config/config.js";


//confi dotenv and mongodb connection file
dotenv.config();
const url = process.env.MONGO_URI

await ConnectDB(url);

//import data
const importData = async ()=>{
    try{
        await dishModel.deleteMany()
        const sampleData = dishData.map(dish=>{return {...dish}})
        await dishModel.insertMany(sampleData);
        console.log("data imported");
        process.exit()
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}

const dataDestroy =()=>{}

if(process.argv[2] === '-d'){
    dataDestroy()
}else{
    importData()
}