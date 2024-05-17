import { Request, Response } from "express";
import Plane from "../../models/plane.model";

export const getAllPlanes = async (req: Request, res: Response) => {
  try {
    const planes = await Plane.find();
    res.render('home', { planes });
  } catch (error) {
    res.status(500).send('Error');
  }
};



