import { useEffect, useState } from "react";
import { Button } from "../components/Button"
import { ChessBoard } from "../components/ChessBoard"
import { useSocket } from "../hooks/useSocket"
import { Chess } from "chess.js";

// TODO: Move together
export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

export const Game = () => {
    const socket = useSocket();
    const [chess, setChess] = useState(new Chess());
    const [board, setBoard] = useState(chess.board());
    const[started ,setstarted] = useState(false);
    const[color,setColor] = useState(null);

    useEffect(() => {
        if (!socket) {
            return
        }
        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log(message);
            switch (message.type) {
                case INIT_GAME:
                    const color = message.payload.color;
                    setBoard(chess.board())
                    setColor(color);
                    setstarted(true);
                    break;
                case (MOVE):
                    const move = message.payload;
                    chess.move(move)
                    setBoard(chess.board())
                    break;
                case (GAME_OVER):
                    break;
            }
        }

    }, [socket])

    if(!socket) return <div>Connecting...</div>

    return <div className="flex justify-center pt-10">
        <div className=" max-w-screen-lg">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <ChessBoard chess={chess} setBoard={setBoard} socket={socket} board={board} />
                </div>

                <div className="py-20 bg-zinc-800 h-auto flex justify-center">
                
                   { !started &&  <Button onClick={() => {
                        socket.send(JSON.stringify({
                            type: INIT_GAME
                        }))
                    }}>Play</Button>}
                    <div className="flex justify-center">
                        <h2 className="text-white text-bold">{started && `You got ${color}`}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
}