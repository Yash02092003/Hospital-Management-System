const mongoose = require('mongoose');
const {Schema , model} = mongoose;

let doctorSchema = new Schema({
    name : {
        type : String ,
        required : true ,
        trim : true,
    } ,
    consultationFee : {
        type : Number ,
        required : true ,
        trim : true,
    } ,
    comment : [
        {
            rating : {
                type :  Number ,
                min : 0 ,
                max : 5
            } ,
            comment : {
                type : String ,
            }
        }
    ] ,
    patientList : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'patient'
    }] ,
    appointmentList : [{
        time : {
            type : Date ,
            required : true 
        } ,
        patient : {
            type : mongoose.Schema.Types.ObjectId ,
            ref : 'patient'
        }
    }],
    qualification:{
        type:String,
        required:true,
    }
} , {timestamps:true})

const doctor = model('doctor' , doctorSchema);

module.exports = doctor;