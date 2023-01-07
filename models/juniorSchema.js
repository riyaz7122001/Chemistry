const express  = require("express");
const mongoose = require("mongoose");

const juniorSchema = new mongoose.Schema({
    name:{String,
    required:[true,"Please provide your name!"]},

    rollNo:{Number,
    required:[true,"Please provide your rollNo!"]},

    division:
    {type:String,
    required:[true,"Please provide your division!"]},

    partner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true,"Your Partner is!"]
    }

});

const Junior = mongoose.model("Junior",juniorSchema);

module.exports = Junior;