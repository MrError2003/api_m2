import express from "express";
import { getAllPlanes } from "../controllers/plane.controller";

const router = express.Router();

router.get("/", getAllPlanes);

export default router;
