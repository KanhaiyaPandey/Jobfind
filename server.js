import * as dotenv from "dotenv";
dotenv.config();
import { nanoid } from "nanoid";
import express from "express";
const app = express();
import morgan from "morgan";

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


// GET ALL JOBS 
app.get('/api/v1/jobs');


// CREATE JOB
app.post('/api/v1/jobs')


// GET SINGLE JOB
app.get('/api/v1/jobs/:id');


// EDIT JOB

app.patch('/api/v1/jobs/:id');


// DELETE JOB

app.delete('/api/v1/jobs/:id');

//   ERROR HANDLING


// not found error
app.use('*', (req, res) => {
    res.status(404).json({msg: "not found"});
});

// unexpected err
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({msg: "somthing went wrong"})
})


const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`server running at ${port}`);
});