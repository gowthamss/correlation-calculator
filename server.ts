import 'dotenv/config';
import mongoose from "mongoose";

import app from './app';


const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI)
    .then(() => {
        console.log('DB connection established');
    })
    .catch((err) => {
        console.log('MongoDB connection error');
        console.log(err);
    });

const port = process.env.PORT;
const hostname = '127.0.0.1';
app.listen(port, () => {
    console.log(`The server is listening on port ${port} of ${hostname}`);
});