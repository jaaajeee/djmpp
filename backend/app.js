const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require ('cors');

const config = require('./config');

const userRouter = require('./routes/user');


const app = express();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(
    cors({
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
    );

app.use('/', userRouter);
const boots = async () => {
    await mongoose.connect(config.mongoUri, config.mongoOptions);
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};
boots();