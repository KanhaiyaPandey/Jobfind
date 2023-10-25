import { Router } from "express";

const router = Router();

import {getAllJobs,
    createJobs,
    deleteJob,
    getSingleJob,
    editJob} from "../controllers/jobsControllers.js";

    router.route('/').get(getAllJobs).post(createJobs)
    router.route('/:id').get(getSingleJob).patch(editJob).delete(deleteJob)

    export default router;