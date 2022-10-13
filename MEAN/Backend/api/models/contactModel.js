//Import mongoose
    const mongoose = require("mongoose");
    

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
   
    const ContactSchema = new Schema({
        name:{
           type:String,
            require:true,
            min:3
        },
         
        email:{
            type:String,
           require:true,
        //  unique:[true,"Email id alredy present"],
         //  validate(value){
         //       if(!validator.isEmail(value)){
          //          throw new Error("Email is in valid");
          //      }
          //  }
       },

        phone:{
           type: Number,
           require:true,
         // min:10,
          //max:10,
           unique:true
       },
       
    message:{
          type:String,
          require:true
       }

});

// create and export model
module.exports = mongoose.model("contactModel", ContactSchema);