import { Request, Response } from "express";
import { createPlayerService, deletePlayerByIdService, getPlayerByIdService, getPlayersService } from "../services/player.service";
import { noContent } from "../utils/http-helper";

export const getPlayers = async (req: Request, res: Response) => {
    const httpResponse = await getPlayersService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const httpResponse = await getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const createPlayer = async (req: Request, res: Response) => {
    const body = req.body;
    const httpResponse = await createPlayerService(body);
    if (httpResponse)
        res.status(httpResponse.statusCode).json(httpResponse.body);
    else {
        const response = await noContent();
        res.status(response.statusCode).json(response.body);
    }
};

export const deletePlayer = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const httpResponse = await deletePlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};
