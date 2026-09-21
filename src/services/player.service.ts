import { PlayerModel } from "../models/PlayerModel";
import * as PlayerRepository from "../repositories/player.repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayersService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let response = null;

    if (data) response = await HttpResponse.ok(data);
    else response = await HttpResponse.noContent();
    
    return response;
};

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.getPlayerById(id);
    let response = null;

    if (data) response = HttpResponse.ok(data);
    else response = HttpResponse.noContent();

    return response;
};

export const createPlayerService = async (player: PlayerModel) => {
    let response = null;

    if (Object.keys(player).length !== 0) {
        await PlayerRepository.createPlayer(player);
        response = HttpResponse.created();
    } else response = HttpResponse.badRequest();

    return response;
};
