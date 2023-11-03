import { Router } from "express";

const router = Router();

import {getAllJobs,
    createJobs,
    deleteJob,
    getSingleJob,
    editJob,
    showStats} from "../controllers/jobsControllers.js";
import {validateIdParam, validateJobInput } from "../middleware/validationMiddleware.js";
import { checkTestUser } from "../middleware/authMiddleware.js";

    router.route('/').get(getAllJobs).post
    (
       checkTestUser,
       validateJobInput, 
       createJobs

     )

     router.route("/stats").get(showStats)

    router.route('/:id')
    .get( validateIdParam, getSingleJob)
    .patch( checkTestUser, validateIdParam, validateJobInput, editJob)
    .delete( checkTestUser, validateIdParam,deleteJob)

    export default router;