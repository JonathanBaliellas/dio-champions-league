import { ClubModel } from "../models/ClubModel";
import fs from "fs/promises";

export const findAllClubs = async (): Promise<ClubModel[]> => {
    const data = await fs.readFile(`${process.env.DB_PATH}/clubs.json`, "utf-8")
    const clubs: ClubModel[] = JSON.parse(data);
    return clubs;
};
