const mongoose = require('mongoose');
const {Schema , model} = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');


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
<<<<<<< HEAD:model/doctor.models.js
    }],
    qualification:{
        type:String,
        required:true,
    }
} , {timestamps:true})

const doctor = model('doctor' , doctorSchema);

module.exports = doctor;
=======
    }] , 
    role : {
        type : String ,
        required : true
    }
})


doctorSchema.plugin(passportLocalMongoose);

const Doctor = model('doctor' , doctorSchema);


module.exports = Doctor;
>>>>>>> 6769e48ae6eb5563d8d75593b94359ba028687c3:model/Doctor.js
