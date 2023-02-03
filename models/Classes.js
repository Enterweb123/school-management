const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
    classname:String,

    teachers:[
        {
            type:mongoose.Types.ObjectId,
            ref:"teachers",
        },
    ],

    student:[
        {
            type:mongoose.Types.ObjectId,
            ref:"students",
        },
    ],

   },

   { timestamps:true }
 );
 
const MyClass = mongoose.model("classes",ClassSchema);

module.exports = MyClass;