import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const gameManager = new GameManager();

wss.on("connection", (ws) => {
  console.log("New connection", ws);
  gameManager.addUser(ws);
  ws.on("close", () => gameManager.removeUser(ws));
  console.log("Connected to ws");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
