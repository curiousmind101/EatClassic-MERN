import mongoose from "mongoose";

const dishSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    price: []
})

const dishModel = mongoose.model("dish", dishSchema);

export default dishModel;