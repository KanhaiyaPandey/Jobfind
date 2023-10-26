import "express-async-errors";
import Job from "../models/jobModels.js";
import { StatusCodes } from "http-status-codes";


export const getAllJobs = async  (req, res) => {
    const jobs = await Job.find({});
    res.status(StatusCodes.OK).json({jobs});
  };

  export const createJobs = async  (req, res) => {
    const job = await Job.create(req.body);

    res.status(StatusCodes.CREATED).json({job});
}

export const getSingleJob = async  (req, res) => {
    const job = await Job.findById(req.params.id);
    res.status(StatusCodes.OK).json({job});
}

export const editJob = async (req, res) =>{
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(StatusCodes.OK).json({msg: "job successfully modified", job: updatedJob});

}

export const deleteJob = async  (req, res) => { 
    const removeJob = await Job.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removeJob });
  }
