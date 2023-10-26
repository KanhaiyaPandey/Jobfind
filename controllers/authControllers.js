import UserModel from "../models/UserModel.js";
import { StatusCodes } from "http-status-codes";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async(req, res) =>{
    const isFirst = await UserModel.countDocuments() === 0;
    req.body.role = isFirst? "admin": "user";
 
    const hashedPassword = await hashPassword(req.body.password)
    req.body.password = hashPassword;

    const user = await UserModel.create(req.body)
    res.status(StatusCodes.CREATED).json({ msg: "user created" });
};

export const login = async (req, res) =>{
    const user = await UserModel.findOne({email: req.body.email});  
    const isValidUser = user && (await comparePassword(req.body.password, user.password));
    if(!isValidUser) throw new UnauthenticatedError("invalid credentials");


    const token = createJWT({userId: user._id, role: user.role})


    res.send({token});
}