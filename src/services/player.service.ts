import { PlayerModel } from "../models/PlayerModel";
import { StatisticsModel } from "../models/StatisticsModel";
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

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    let response = null;
    const data = await PlayerRepository.updatePlayer(id, statistics);

    if (data) response = HttpResponse.ok(data);
    else response = HttpResponse.noContent();

    return response;
};

export const deletePlayerByIdService = async (id: number) => {
    let response = null;
    const isDeleted = await PlayerRepository.deletePlayerById(id);

    if (isDeleted) response = HttpResponse.ok({ message: "Player deleted successfully" });
    else response = HttpResponse.notFound();

    return response;
};
