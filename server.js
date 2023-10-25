import "express-async-errors";

import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import {StatusCodes} from "http-status-codes";

// routes
import jobRoutes from './routes/jobsRoutes.js';

// middleware
import errorHandler from "./middleware/errorHandler.js";

if(process.env.NODE_ENV === "development"){
  app.use(morgan('dev'));
}

app.use(express.json());

app.post('/', (req, res) => {
    console.log(req);
     res.json({message:"data recived", data: req.body})
});

app.get('/', (req, res) => {
    res.send('hello world');
});


app.use("/api/v1/jobs", jobRoutes)


// not found error
app.use('*', (req, res) => {
    res.status(404).json({msg: "not found"});
});

// unexpected err
app.use((err, req, res, next) => {
    // console.log(err);
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    const msg = err.message || "something went wrong"
    res.status(statusCode).json({msg});
})


const port = process.env.PORT || 3000;

try {
    await mongoose.connect(process.env.MONGO_DB);
    app.listen(port, () => {
      console.log(`server running on PORT ${port}....`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  };