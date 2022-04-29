const express = require('express');

const RecordModel = require('../models/record.js');

const router = express.Router();

router.use('/:recordId', async (req, res, next) => {
    const recordId = req.params.recordId;
    if (recordId && !recordId.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).send('Record not found');
    }
    const foundRecord = await RecordModel.findById(recordId);

    if (!foundRecord) {
        return res.status(404).send('Record not found');
    }
    req.record = foundRecord;
    return next();
});

// get all records
router.get('/', async (req, res) => {
    const records = await RecordModel.find();
    return res.send(records);
});

// get record by id 
router.get('/:recordId', async (req, res) => {
    const record = await RecordModel.findById(req.params.recordId);
    return res.send(record);
});

// create new record
router.post('/', async (req, res) => {
    const body = req.body;
    const newRecord = new RecordModel(body);
    const errors = newRecord.validateSync();
    if (errors) {
        const errorsFieldsNames = Object.keys(errors.errors);
        if (errorsFieldsNames.length > 0) {
            return res.status(400).send(errors.errors[errorsFieldsNames[0]].message);
        }
    }
    await newRecord.save();
    return res.status(201).send('newRecord created');
});

// update record
router.put('/:recordId',async (req, res, next) => {
    const body = req.body;
    const record = req.record;
    const errors = record.validateSync();
    if (errors) {
        const errorsFieldsNames = Object.keys(errors.errors);
        if (errorsFieldsNames.length > 0) {
            return res.status(400).send(errors.errors[errorsFieldsNames[0]].message);
        }
    }
    record.activityName = body.activityName;
    record.description = body.description;
    record.calories = body.calories;
    record.date = body.date;
    record.duration = body.duration;
    await record.save();
    return res.status(200).send('Record updated')
});
  
// delete record
router.delete('/:recordId', async (req, res) => {
    const foundedId = req.params._id;
    await RecordModel.findOneAndDelete({id:foundedId})

    .then(() => {
    res.status(204).send('delete success'); // 204 = No content which mean it successfully removed
    })
});

module.exports = router;
