const { required } = require('joi');
const mongoose = require('mongoose');
const {Schema , model} = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

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
    } , 
    role : {
        type : String ,
        required : true
    }
})

patientSchema.plugin(passportLocalMongoose);

const Patient = model('patient' , patientSchema);

module.exports = Patient;