"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const GameManager_1 = require("./GameManager");
const wss = new ws_1.WebSocketServer({ port: 8080 });
const Gamemanager = new GameManager_1.GameManager();
console.log("running");
wss.on('connection', function connection(ws) {
    Gamemanager.addUser(ws);
    ws.on('disconnect', () => Gamemanager.removeUser(ws));
    console.log("Connected to ws");
});
