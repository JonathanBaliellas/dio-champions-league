import * as ClubRepository from "../repositories/club.repository";
import * as HttpResponse from "../utils/http-helper";

export const getClubs = async () => {
    const data = await ClubRepository.findAllClubs();
    const response = HttpResponse.ok(data);
    return response;
};
