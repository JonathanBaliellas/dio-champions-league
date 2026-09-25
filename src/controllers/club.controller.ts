import { Request, Response } from "express";
import * as ClubService from "../services/club.service";

export const getClubs = async (req: Request, res: Response) => {
    const response = await ClubService.getClubs();
    res.status(response.statusCode).json(response.body);
};
