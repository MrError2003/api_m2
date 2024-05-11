import { Request, Response } from "express";
import Plane from "../../models/plane.model";

export const getPlanes = async (req: Request, res: Response) => {
    try {
        const planes = await Plane.find();
        res.status(200).json(planes);
    } catch (error) {
        res.status(500).send("Error getting planes");
    }
};

export const getPlane = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const plane = await Plane.findById(id);
        res.status(200).json(plane);
    } catch (error) {
        res.status(500).send("Error getting plane");
        res.status(404).send("Plane not found");
    }
};


export const createPlane = async (req: Request, res: Response) => {
    try {
        const { namePlane, modelPlane, yearPlane, typePlane, countryPlane, descriptionPlane } = req.body;
        const plane = new Plane({ namePlane, modelPlane, yearPlane, typePlane, countryPlane, descriptionPlane });
        await plane.save();
        res.status(201).json(plane);
    } catch (error) {
        res.status(500).send("Error creating plane");
    }
};

export const createManyPlanes = async (req: Request, res: Response) => {
    try {
        const planes = req.body;
        const createPlanes = await Plane.insertMany(planes);
        res.status(200).json(createPlanes);
    } catch (error) {
        console.error("Error creating planes", error);
        res.status(500).send("Error creating planes");
    }
};

export const updatePlane = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { namePlane, modelPlane, yearPlane, typePlane, countryPlane, descriptionPlane } = req.body;
        const plane = await Plane.findByIdAndUpdate(id, { namePlane, modelPlane, yearPlane, typePlane, countryPlane, descriptionPlane });
        res.status(200).json(plane);
    } catch (error) {
        res.status(500).send("Error updating plane");
    }
};

export const deletePlane = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await Plane.findByIdAndDelete(id);
        res.status(204).send("Plane deleted");
    } catch (error) {
        res.status(500).send("Error deleting plane");
        res.status(404).send("Plane not found");
    }
};