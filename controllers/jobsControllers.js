import "express-async-errors";
import Job from "../models/jobModels.js";
import { StatusCodes } from "http-status-codes";
import day from "dayjs"
import mongoose from "mongoose";


export const getAllJobs = async  (req, res) => {
        const jobs = await Job.find({ createdBy: req.user.userId });
        res.status(StatusCodes.OK).json({ jobs });  
  };

  export const createJobs = async  (req, res) => {
    req.body.createdBy = req.user.userId;
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

  export const showStats = async (req, res) => {
    let stats = await Job.aggregate([
      { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
      { $group: { _id: '$jobStatus', count: { $sum: 1 } } },
    ]);
    stats = stats.reduce((acc, curr) => {
      const { _id: title, count } = curr;
      acc[title] = count;
      return acc;
    }, {});

    const defaultStats = {
        pending: stats.pending || 0,
        interview: stats.interview || 0,
        declined: stats.declined || 0,
      };
      let monthlyApplications = await Job.aggregate([
        { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
        {
          $group: {
            _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
            count: { $sum: 1 },
          },
        },
        { $sort: { '_id.year': -1, '_id.month': -1 } },
        { $limit: 6 },
      ]);

      monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      const date = day()
        .month(month - 1)
        .year(year)
        .format('MMM YY');
      return { date, count };
    })
    .reverse();
    
      res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
  }