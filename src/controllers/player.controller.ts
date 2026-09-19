import { Request, Response } from "express";
import { getPlayerByIdService, getPlayersService } from "../services/player.service";

export const getPlayers = async (req: Request, res: Response) => {
    const httpResponse = await getPlayersService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const httpResponse = await getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};
