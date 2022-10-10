

  





  const  DropHandler=(e,board,item,store)=>{


    e.preventDefault();


  
  
  
     // мы должны узнать номер той задачи , которую хотим удалить
    const currentIndex = store.change_cur_board.board.items.indexOf(store.change_cur_item.task )
  
    store.change_cur_board.board.items.splice(currentIndex,1)

    const dropIndex = board.items.indexOf(item)
    board.items.splice(dropIndex  + 1 ,0,store.change_cur_item.task )

   //  dispatch({type: actionCreatorAllBoards() ,
   //      payload: [ board,
   //       board.id,
   //       store.change_cur_board.board.title,
   //       store.change_cur_board.board]
      
 
 
   //    });

   return [
      board,
     board.id,
     store.change_cur_board.board.title,
     store.change_cur_board.board]
   
   
   }


    export default DropHandler