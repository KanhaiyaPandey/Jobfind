import { Router } from "express";

const router = Router();

import {getAllJobs,
    createJobs,
    deleteJob,
    getSingleJob,
    editJob} from "../controllers/jobsControllers.js";
import {validateIdParam, validateJobInput } from "../middleware/validationMiddleware.js";

    router.route('/').get(getAllJobs).post(validateJobInput, createJobs)
    router.route('/:id')
    .get( validateIdParam, getSingleJob)
    .patch( validateIdParam, validateJobInput, editJob)
    .delete( validateIdParam,deleteJob)

    export default router;