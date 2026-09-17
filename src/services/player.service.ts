import { noContent, ok } from "../utils/http-helper";

export const getPlayersService = async () => {
    const data = { player: 'Jontz' };
    let response = null;

    if (data) response = await ok(data);
    else response = await noContent();
    
    return response;
};
