import express from 'express';
const app = express();
import 'express-async-errors'
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/connect.js';

import authRouter from './routes/authRoutes.js';

import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.use(express.json());

// const array = ['apple', 'orange', 'banana'];
// app.get('/a', (req, res)=> {
//     res.json({arr: array});
// })

app.use('/api/v1/auth', authRouter);

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
