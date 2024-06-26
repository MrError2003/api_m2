import express from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import planeRoutes from "./plane.routes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/planes", planeRoutes);

export default router;
