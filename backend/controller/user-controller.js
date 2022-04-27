const express = require('express');
const User = require('../models/user');

const router = express.Router();

const signup = async (req, res, next) => {

    const { username, email, password, age, weight, height } = req.body;
    const newUser = new User((
       username,
       email,
       password,
       age,
       weight,
       height
    ));
    
    const errors = newUser.validateSync();//validateSync returns an object with errors
    if (errors) {
        const errorsFieldsNames = Object.keys(errors.errors);
        if (errorsFieldsNames.length > 0) {
            return res.status(400).send(errors.errors[errorsFieldsNames[0]].message);
        }
    }
    await newUser.save();
    return res.status(201).send('newUser created');
    console.log(newUser);
}
module.exports = router;





