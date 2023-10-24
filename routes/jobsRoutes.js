import { Router, Router } from "express";

const router = Router();

import {getAllJobs,
    createJobs,
    deleteJob,
    getSingleJob,
    editJob} from "../controllers/jobsControllers.js"