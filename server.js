import express from 'express';
const app = express();
import 'express-async-errors'
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan'

import {dirname} from 'path';
import {fileURLToPath} from 'url';
import path from 'path';


import connectDB from './db/connect.js';

import authRouter from './routes/authRoutes.js';
import eventRouter from './routes/eventsRoutes.js';

import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/events', eventRouter);

app.get('*', (req,res)=> {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.htmml'))
})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5001

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start();
