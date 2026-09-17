interface PlayerModel {
    id: number;
    name: string;
};

const database: PlayerModel[] = [
    { id: 1, name: "Erling Haaland" },
    { id: 2, name: "Kylian Mbappé" },
    { id: 3, name: "Vinícius Júnior" },
    { id: 4, name: "J Jude Bellingham" },
    { id: 5, name: "Harry Kane" }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const getPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id);
};
