const express  = require("express");
const mongoose = require("mongoose");

const breakageCharge = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    
    amount:{
        type:Number,
        required:[true,"Please provide the amount of breakage apparatus!"]
    },
});

const BreakageCharge = mongoose.model("Breakage",breakageCharge)