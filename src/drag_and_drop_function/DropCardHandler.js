



const DropCardHandler=(e,board,store)=>{

    const currentId = board.items.map(item => item.id)
  
    if (!currentId.includes(store.change_cur_item.task.id)) {
      board.items.push(store.change_cur_item.task )
             const currentIndex = store.change_cur_board.board.items.indexOf(store.change_cur_item.task)
             store.change_cur_board.board.items.splice(currentIndex, 1)
     

          return [
            board,
           board.id,
           store.change_cur_board.board.title,
           store.change_cur_board.board]
          }
  }

  export default DropCardHandler