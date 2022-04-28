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

router.get('/:recordId', (req, res, next) => {
    return res.send(req.record);
});

router.get('/', async (req, res, next) => {
    const response = await RecordModel.find();
    return res.send(response);
});

router.post('/', async (req, res, next) => {
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

router.put('/:recordId',async (req, res, next) => {
    const foundedId = req.params._id;
    const body = req.body;
    await RecordModel.findByIdAndUpdate({id:foundedId}, body,{runValidators: true})
    .then(() => {
        res.status(201).send('Record updated');
    })
    .catch(err => {
        res.status(400).send(err);
    }
    );    
});
  
router.delete('/:recordId', async (req, res, next) => {
    const foundedId = req.params._id;
    await RecordModel.findOneAndDelete({id:foundedId})

    .then(() => {
    res.status(204).send('delete success'); // 204 = No content which mean it successfully removed
    })
});

module.exports = router;
