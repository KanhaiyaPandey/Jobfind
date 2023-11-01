import { Router } from "express";
import { getApplicationStats, getCurrentUser, updateUser } from "../controllers/UserControllers.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats",authorizePermissions("admin"),getApplicationStats);
router.patch("/update-user",upload.single("avatar"),validateUpdateUserInput,updateUser);

export default router;