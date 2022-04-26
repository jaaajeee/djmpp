const express = require('express');

const recordRouter = require('./records.js');

const router = express.Router();

router.use('/me/record', recordRouter);

router.post('/login', (req, res, next) => {});
router.post('/signup', (req, res, next) => {});
router.get('/me', (req, res, next) => {});
router.put('/me', (req, res, next) => {});

module.exports = router;