import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import logger = require('morgan');

import AppError from './utils/appError';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello Correlation Calculator with node and typescript - wowing');
});

// app.listen(port, () => {
//     return console.log(`Express is listening at http://localhost:${port}`);
// });

export default app;