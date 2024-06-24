const { required } = require('joi');
const mongoose = require('mongoose');
const {Schema , model} = mongoose;

const patientSchema = new Schema({
    name : {
        type : String ,
        required : true ,
        trim : true
    } ,
    contact : {
        type : Number ,
        require : true
    } ,
    age : {
        type : Number ,
        required : true ,
    },
    diagonedwith:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    bloodgroup:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        enum:["male" , "female" , "others"],
        required:true,
    },
    admittedin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'hospital',
    }
} , {timestamps:true})

const Patient = model('patient' , patientSchema);

module.exports = Patient;