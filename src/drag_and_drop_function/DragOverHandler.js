const DragOverHandler = (e) => {
  e.preventDefault();

  if (e.target.className === "Task") {
    e.target.style.boxShadow = "0 12px 10px black";
  }
};

export default DragOverHandler;
