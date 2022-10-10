import React from "react";
import classes from "./App.module.css";
import { useSelector } from "react-redux";
import Card from "./UI/Card/Card";

function App() {
  const store = useSelector((store) => store);

  console.log(store.change_all_boards);

  return (
    <div className={classes.App}>
      {store.change_all_boards.map((board) => (
        <Card board={board} key={board.id}></Card>
      ))}
    </div>
  );
}

export default App;
