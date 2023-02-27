import React from "react";
// components
import { BoardHeader } from "./BoardHeader";
import BoardNav from "./BoardNav";
import KanBoards from "./KanBoards";

import "./board.css";

function Board() {
  return (
    <div className="w-full py-3 px-9">
      <BoardHeader />
      <BoardNav />
      <KanBoards />
    </div>
  );
}

export default Board;
