import { Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE } from "../screens/Game";



export const ChessBoard = ({ setBoard, chess, socket, board }: {

   

    chess: any;
    setBoard: any;
    board: ({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[][];
    socket: WebSocket;
}) => {
    const [from, setfrom] = useState<null | Square>(null)
    const [to, setTo] = useState<null | Square>(null)
    return <div className="bg-red-200">
        {
            board.map((row, i) => {
                return <div key={i} className="flex justify-center">
                    {row.map((square, j) => {
                        const squareRep = String.fromCharCode(97 + (j % 8)) + "" + (8 - i) as Square

                        return <div onClick={() => {
                            if (!from) {
                                setfrom(squareRep);
                            } else {
                                socket.send(JSON.stringify({
                                    type: MOVE,
                                    payload: {
                                        move: {
                                            from,
                                            to: squareRep
                                        }

                                    }
                                }))
                                setfrom(null);
                                chess.move({
                                    from, to: squareRep
                                });
                                setBoard(chess.board());
                                console.log({ from, to: squareRep })
                            }
                        }} key={j} className={`flex items-center justify-center sm:w-6 sm:h-6 md:w-14 md:h-14 ${(i + j) % 2 === 0 ? "bg-orange-300" : "bg-yellow-800	"}`}>
                            <div className="w-full h-full justify-center flex">
                                <div className="h-full justify-center flex flex-col">
                                    {square? <img src={`/images/${square?.color === 'b'?square.type:`${square?.type?.toUpperCase()} copy`}.png`} /> : null }
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            })
        }
    </div>
}