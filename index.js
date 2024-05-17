const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');

require('dotenv').config();

const app = express();

//app.use(cors(corsOptions));
app.use(cors());

const blackList = new Set();
module.exports = blackList;

const authRouter = require('./routers/authRouter');
const usersRouter = require('./routers/usersRouter');

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api', usersRouter);

const start = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://admin-panel:admin-panel@admin-panel-cluster.idpu8rj.mongodb.net'
        );

        app.listen(PORT, () =>
            console.log(`server started on the port ${PORT}`)
        );
    } catch (err) {
        console.log(err);
    }
};

start();
