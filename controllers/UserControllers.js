import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import job from "../models/jobModels.js";

export const getCurrentUser = async (req, res) =>{
    res.status(StatusCodes.OK).json({msg: "get current user"})
}

