const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { seedDoctor, seedPatient } = require('./seed');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Doctor = require('./model/Doctor');
const Patient = require('./model/Patient');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();
const PORT = 8080;

mongoose.connect('mongodb://localhost:27017/Hospital-Management')
.then( () => {
    console.log('Server Connected At PORT : 27017');
})
.catch( (e) => {
    console.log('Some error Occurred' , e);
})

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname , 'public')));

app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(session({
    secret: 'mylittlesecret',
    resave: false,
    store : MongoStore.create({mongoUrl : 'mongodb://localhost:27017/Hospital-Management'}),
    saveUninitialized: true,
    cookie: { 
        secure: false ,
        maxAge: 7 * 24 * 60 * 60 * 1000
     }
  }))


app.use(passport.initialize());
app.use(passport.session());

// Doctor login
passport.use('doctor-local' , new LocalStrategy(Doctor.authenticate()))

// Patient Login
passport.use('patient-local' , new LocalStrategy(Patient.authenticate()));

passport.serializeUser((user, done) => {
    done(null, { id: user.id, role: user.role });
});

passport.deserializeUser((obj, done) => {
    const Model = obj.role === 'doctor' ? Doctor : Patient;
    Model.findById(obj.id, (err, user) => {
        done(err, user);
    });
});

// seedDoctor();
// seedPatient();



app.get('/' , (req , res)=>{
    res.render('index');
})

app.get('/login' , (req , res)=>{
    res.render('login');
})

app.get('/register' , (req , res)=> {
    res.render('register');
})

app.listen(PORT , () => {
    console.log(`Server Connected At PORT : ${PORT}`);
})