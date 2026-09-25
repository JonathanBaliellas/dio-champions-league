import { Router } from "express";
import * as PlayerController from "./controllers/player.controller";
import * as ClubController from "./controllers/club.controller";

const router = Router();

router.get('/players', PlayerController.getPlayers);
router.get('/players/:id', PlayerController.getPlayerById);
router.post('/players', PlayerController.createPlayer);
router.delete('/players/:id', PlayerController.deletePlayer);
router.patch('/players/:id', PlayerController.updatePlayer);

router.get('/clubs', ClubController.getClubs);

export default router;
