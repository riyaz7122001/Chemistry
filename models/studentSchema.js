const express  = require("express");
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:
    {type:String,
    required:[true,"Please provide your name!"]
    },

    rollNo:
    {
    type:Number,
    required:[true,"Please provide your rollNo!"]
    },

    standard:{
        type:String,
        enum:{
            values:["FYJC","SYJC","FYBsc","SYBsc","TYBsc"],
            required:[true,"Pleae provide your standard!"]
        }
    },

    division:{
        type:String,
        default:false,    
        enum:{
            values:["A","B","C","Degree"],
            required:[true,"Please provide your division!"]
        },
    },


});

const Student = mongoose.model("Student",studentSchema);
module.exports = Student;