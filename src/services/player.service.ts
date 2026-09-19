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
