const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"User",
    },
    name:{
        type: String,
        required:[true,"Please add the Contact Name"]
    },
    email:{
        type: String,
        required:[true,"Please add the email address"]
    },
    phone:{
        type: String,
        required:[true,"Please add the Phone Number"]
    },
    
},{
    timestamps: true,
})

module.exports = mongoose.model("Contact",contactSchema);