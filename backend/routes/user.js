const express = require('express');
const recordRouter = require('./records.js');
// const signupRouter = require('../controller/user-controller.js');

const router = express.Router();

router.use('/me/record', recordRouter);

// router.post('/signin', (req, res, next) => {});

// router.post('/signup', signupRouter);

// router.get('/me', (req, res, next) => {});
// router.put('/me', (req, res, next) => {});

module.exports = router;