import React from "react";
import "./Card.css";

import DragOverHandler from "../../drag_and_drop_function/DragOverHandler";

import DropCardHandler from "../../drag_and_drop_function/DropCardHandler";
import Task from "../Task/Task";

import { actionCreatorAllBoards } from "../../Redux/action/actionCreator";

import { useDispatch, useSelector } from "react-redux";

function Card({ board }) {
  const dispatch = useDispatch();

  const store = useSelector((store) => store);

  return (
    <div
      className="card"
      onDragOver={(e) => DragOverHandler(e)}
      onDrop={(e) =>
        dispatch({
          type: actionCreatorAllBoards(),
          payload: DropCardHandler(e, board, store),
        })
      }
    >
      {board.title}

      {board.items.map((item) => (
        <Task item={item} board={board}></Task>
      ))}
    </div>
  );
}

export default Card;
