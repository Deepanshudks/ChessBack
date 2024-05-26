import { WebSocketServer } from 'ws';
import { GameManager } from './GameManager';

const wss = new WebSocketServer({ port: 8080 });

const Gamemanager = new GameManager();
console.log("running")
wss.on('connection', function connection(ws) {
    Gamemanager.addUser(ws);
    ws.on('disconnect', () => Gamemanager.removeUser(ws))
    console.log("Connected to ws")

});