const mongoose = require('mongoose')

const medicalRecordSchema = new mongoose.Schema({
    
})

export const medicalRecord = mongoose.model("medicalRecord" , medicalRecordSchema)