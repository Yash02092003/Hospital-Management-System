const express = require('express');
const Patient = require('../model/Patient');
const router = express.Router();

router.get('/patient/add' , async (req , res) => {
    res.send("Form to Add New Patient");
})

router.post('/patient/add' , async (req , res) => {
    let {name , contact , age} = req.body;
    let patient = new Patient({name , contact , age});
    await patient.save();
    res.send("New patient Created");
})

router.get('/patient/:id/update' , async (req , res) => {
    let patient = await Patient.findById(req.params.id);
    res.send('Displaying the form to update current patient details');
})

router.post('/patient/:id/update' , async (req , res) => {
    let { id } = req.params;
    let {name , contact , age} = req.body;
    await Patient.findByIdAndUpdate(id , {name , contact , age});
    res.send('Patient Information updated');
})

router.delete('/patient/:id/delete' , async (req , res) => {
    let {id} = req.params;
    await Patient.findByIdAndDelete(id);
    res.send('Patient Deleted Successfully');
})

module.exports = router