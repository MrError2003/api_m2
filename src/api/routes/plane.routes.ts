import express from "express";
import { 
    getPlanes, 
    getPlane, 
    createPlane, 
    createManyPlanes, 
    updatePlane, 
    deletePlane } from "../controllers/plane.controller";

import { verifyJWT } from "../controllers/auth.controller";

const router = express.Router();

router.get("/allplanes", verifyJWT, getPlanes);
router.get("/plane/:id", verifyJWT, getPlane);
router.post("/plane", verifyJWT, createPlane);
router.post("/planes", verifyJWT, createManyPlanes);
router.put("/plane/:id", verifyJWT, updatePlane);
router.delete("/plane/:id", verifyJWT, deletePlane);

export default router;


