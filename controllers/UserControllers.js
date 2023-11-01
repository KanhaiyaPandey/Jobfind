import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import job from "../models/jobModels.js";

export const getCurrentUser = async (req, res) =>{
    const userWithoutPassword = await User.findOne({_id: req.user.userId});
    const user = userWithoutPassword.toJSON();
    res.status(StatusCodes.OK).json({user});
}


export const getApplicationStats= async (req, res) =>{
    const users = await User.countDocuments();
    const jobs = await job.countDocuments();
    res.status(StatusCodes.OK).json({ users, jobs})
}


export const updateUser = async (req, res) =>{
    const obj = {...req.body};
    delete obj.password;
    const updatedUser = await User.findByIdAndUpdate(req.user.userId, obj);
    res.status(StatusCodes.OK).json({msg: "updated user"})
}

