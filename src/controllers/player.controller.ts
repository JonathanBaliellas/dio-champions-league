import { Request, Response } from "express";
import { getPlayersService } from "../services/player.service";

export const getPlayers = async (req: Request, res: Response) => {
    const data = await getPlayersService();
    res.status(200).json(data);
};
