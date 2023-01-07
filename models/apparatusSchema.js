const express  = require("express");
const mongoose = require("mongoose");

const apparatusSchema = new mongoose.Schema({
    name:{
        type:String,
        requird:[true,"Please provide apparatus name!"]
    },
    size:{
        type:String,
        requird:false
    },

    price:{
        type:Number,
        requird:[true,"Please provide apparatus price!"],
        default:20        
    }
})

const Apparatus = mongoose.model("Apparatus",apparatusSchema);
module.exports = Apparatus;
