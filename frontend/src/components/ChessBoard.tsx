import { Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE } from "../screens/Game";

export const ChessBoard = ({
  setBoard,
  chess,
  socket,
  board,
}: {
  chess: any;
  setBoard: any;
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
  socket: WebSocket;
}) => {
  const [from, setfrom] = useState<null | Square>(null);
  const [to, setTo] = useState<null | Square>(null);
  return (
    <div>
      {board.map((row, i) => {
        return (
          <div key={i} className="flex justify-center">
            {row.map((square, j) => {
              const squareRep = (String.fromCharCode(97 + (j % 8)) +
                "" +
                (8 - i)) as Square;

              return (
                <div
                  onClick={() => {
                    if (!from) {
                      setfrom(squareRep);
                    } else {
                      socket.send(
                        JSON.stringify({
                          type: MOVE,
                          payload: {
                            move: {
                              from,
                              to: squareRep,
                            },
                          },
                        })
                      );
                      setfrom(null);
                      chess.move({
                        from,
                        to: squareRep,
                      });
                      setBoard(chess.board());
                      console.log({ from, to: squareRep });
                    }
                  }}
                  key={j}
                  className={`flex items-center justify-center w-10 h-10 md:w-14  md:h-14 ${
                    (i + j) % 2 === 0 ? "bg-orange-200" : "bg-[#854d0ea8]	"
                  }`}
                >
                  <div className="flex justify-center w-full h-full">
                    <div className="flex flex-col justify-center h-full">
                      {square ? (
                        <img
                          src={`/images/${
                            square?.color === "b"
                              ? square.type
                              : `${square?.type?.toUpperCase()} copy`
                          }.png`}
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
