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
            } , 
            default : []
        }
    ] ,
    patientList : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Patient'
    }] ,
    appointmentList : [{
        time : {
            type : Date ,
            required : true 
        } ,
        patient : {
            type : mongoose.Schema.Types.ObjectId ,
            ref : 'Patient'
        }
    }]
})

const Doctor = model('doctor' , doctorSchema);

module.exports = Doctor;