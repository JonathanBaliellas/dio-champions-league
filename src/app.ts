import express, { json } from 'express';
import { getPlayers } from './controllers/player.controller';

export const createApp = () => {
    const app = express();
    
    app.use(json());
    
    app.get('/', getPlayers);

    return app;
};

export default createApp;
