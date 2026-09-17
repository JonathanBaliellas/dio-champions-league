import { Request, Response } from "express";
import { getPlayersService } from "../services/player.service";
import { ok } from "../utils/http-helper";

export const getPlayers = async (req: Request, res: Response) => {
    const data = await getPlayersService();
    const response = await ok(data);
    res.status(response.statusCode).json(response.body);
};
