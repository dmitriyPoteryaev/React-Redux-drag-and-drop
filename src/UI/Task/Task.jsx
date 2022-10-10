import React from "react";
import "./Task.css";
import { useDispatch, useSelector } from "react-redux";

import {
  actionCreatorItem,
  actionCreatorBoard,
  actionCreatorAllBoards,
} from "../../Redux/action/actionCreator";

import DragLeaveHandler from "../../drag_and_drop_function/DragLeaveHandler";
import DragEndHandler from "../../drag_and_drop_function/DragEndHandler";
import DropHandler from "../../drag_and_drop_function/DropHandler";

import DragOverHandler from "../../drag_and_drop_function/DragOverHandler";

function Task({ item, board }) {
  const dispatch = useDispatch();

  const store = useSelector((store) => store);

  return (
    <div
      key={item.id}
      className="Task"
      onDragOver={(e) => DragOverHandler(e)}
      onDragLeave={(e) => DragLeaveHandler(e)}
      onDragStart={(e) => {
        dispatch({ type: actionCreatorItem(), payload: item });
        dispatch({ type: actionCreatorBoard(), payload: board });
      }}
      onDragEnd={(e) => DragEndHandler(e)}
      onDrop={(e) =>
        dispatch({
          type: actionCreatorAllBoards(),
          payload: DropHandler(e, board, item, store),
        })
      }
      draggable={true}
    >
      {item.descpition}
    </div>
  );
}

export default Task;
