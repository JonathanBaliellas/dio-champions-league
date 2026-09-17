import { Request, Response } from "express";
import { getPlayersService } from "../services/player.service";

export const getPlayers = async (req: Request, res: Response) => {
    const httpResponse = await getPlayersService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
};
