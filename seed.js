const mongoose = require('mongoose');
const Doctor = require('./model/Doctor');
const Patient = require('./model/Patient');

const patientsData = [
    {
        name: 'John Doe',
        contact: 1234567890,
        age: 35
    },
    {
        name: 'Jane Smith',
        contact: 9876543210,
        age: 28
    }
];

async function seedPatient(){
    await Patient.insertMany(patientsData);
}

const doctorsData = [
    {
        name: 'Dr. Alice Johnson',
        consultationFee: 150,
        comment: [
            {
                rating: 4,
                comment: 'Excellent doctor!'
            },
            {
                rating: 5,
                comment: 'Highly recommended!'
            }
        ],
        patientList: [], // Add patient IDs here
        appointmentList: []
    },
    {
        name: 'Dr. Bob Brown',
        consultationFee: 200,
        comment: [
            {
                rating: 3,
                comment: 'Average experience.'
            }
        ],
        patientList: [], 
        appointmentList: []
    }
];

async function seedDoctor(){
    await Doctor.insertMany(doctorsData);
}

module.exports = {seedPatient , seedDoctor};
