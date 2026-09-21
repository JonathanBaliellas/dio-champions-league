import { PlayerModel } from "../models/PlayerModel";

const database: PlayerModel[] = [
    {
        id: 1,
        name: 'Lionel Messi',
        club: 'Inter Miami',
        nationality: 'Argentina',
        position: 'Ponta-direita',
        statistics: {
            overall: 90,
            pace: 80,
            shooting: 87,
            passing: 90,
            dribbling: 94,
            defending: 33,
            physical: 64
        }
    },
    {
        id: 2,
        name: 'Cristiano Ronaldo',
        club: 'Al-Nassr',
        nationality: 'Portugal',
        position: 'Centroavante',
        statistics: {
            overall: 86,
            pace: 77,
            shooting: 88,
            passing: 75,
            dribbling: 80,
            defending: 34,
            physical: 75
        }
    },
    {
        id: 3,
        name: 'Kylian Mbappé',
        club: 'Real Madrid',
        nationality: 'França',
        position: 'Centroavante',
        statistics: {
            overall: 91,
            pace: 97,
            shooting: 90,
            passing: 80,
            dribbling: 92,
            defending: 36,
            physical: 78
        }
    },
    {
        id: 4,
        name: 'Kevin De Bruyne',
        club: 'Manchester City',
        nationality: 'Bélgica',
        position: 'Meio-campista',
        statistics: {
            overall: 91,
            pace: 72,
            shooting: 88,
            passing: 94,
            dribbling: 87,
            defending: 65,
            physical: 78
        }
    },
    {
        id: 5,
        name: 'Virgil van Dijk',
        club: 'Liverpool',
        nationality: 'Holanda',
        position: 'Zagueiro',
        statistics: {
            overall: 89,
            pace: 78,
            shooting: 60,
            passing: 71,
            dribbling: 72,
            defending: 89,
            physical: 86
        }
    }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const getPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id);
};

export const createPlayer = async (player: PlayerModel) => {
    database.push(player);
};
