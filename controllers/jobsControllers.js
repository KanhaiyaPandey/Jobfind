import "express-async-errors";

import Job from "../models/jobModels.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors.js";

export const getAllJobs = async  (req, res) => {
    const jobs = await Job.find({});
    res.status(StatusCodes.OK).json({jobs});
  };

  export const createJobs = async  (req, res) => {
  const {company, position} = req.body;

    const job = await Job.create({company,position})

    res.status(StatusCodes.CREATED).json({job});
}

export const getSingleJob = async  (req, res) => {
    const {id} = req.params;
    const job = await Job.findById(id);

    if(!job) throw new NotFoundError(`no job found with the give id ${id}`);

    res.status(StatusCodes.OK).json({job});
}

export const editJob = async (req, res) =>{
    const {id} = req.params;
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
        new: true
    })
    if(!updatedJob) throw new NotFoundError(`no job found with the give id ${id}`);

    res.status(StatusCodes.OK).json({msg: "job successfully modified", job: updatedJob});

}

export const deleteJob = async  (req, res) => {
    const { id } = req.params;
    const removeJob = await Job.findByIdAndDelete(id);

    if (!removeJob) throw new NotFoundError(`no job found with the give id ${id}`);

    res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removeJob });
  }
