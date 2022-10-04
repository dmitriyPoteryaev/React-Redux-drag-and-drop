
import React, { useState }  from "react";
// import Card from './UI/Card/Card'
import classes from "./App.module.css";


function App() {
  // состояние для текущей доски , с которой бы взята задача
const [currentBoard ,setCurrentBoard] = useState(null)

// состояние для задачи , которую мы взяли
const [currentItem ,setCurrentItem] = useState(null)

  const [boards , setBoards] = useState([
{id:1 ,title:'First Week', items:[
  {id:11, descpition: 'First Week.Codding'},
{id:21, descpition: 'First Week.Rest'},
{id:31, descpition: 'First Week.Dinner'},
],

},
{id:2 ,title:'Second Week', items:[
  {id:14, descpition: 'Second Week.Codding'},
{id:15, descpition: 'Second Week.Rest'},
{id:16, descpition: 'Second Week.Dinner'},
],

},
{id:3 ,title:'Third Week', items:[
  {id:17, descpition: 'Third Week.Codding'},
{id:18, descpition: 'Third Week.Rest'},
{id:19, descpition: 'Third Week.Dinner'},
],

}
  ])
  function dragOverHandler(e){

    e.preventDefault();
  
  
  
    if(e.target.className==='Tasks'){
  
      e.target.style.boxShadow = '0 12px 10px black'
    }
  
  }
   //2
  function dragLeaveHandler(e){
  
    e.target.style.boxShadow = 'none'
    
  }
   //3
  function dragStartHandler(e,board,item){

    setCurrentItem(item)
    setCurrentBoard(board) 
  }
   //4
  function dragEndHandler(e){
  
    e.target.style.boxShadow = 'none'
    
  }
  
  //5
  function dropHandler(e,board,item){


    e.preventDefault();
  
     // мы должны узнать номер той задачи , которую хотим удалить
    const currentIndex = currentBoard.items.indexOf(currentItem)
  
    currentBoard.items.splice(currentIndex,1)

    const dropIndex = board.items.indexOf(item)
    board.items.splice(dropIndex  + 1 ,0, currentItem)

    setBoards(boards.map((ArrBoard)=>{

      if(ArrBoard.id===board.id){

        return   board
        
      }
      if(ArrBoard.title===currentBoard.title)
      {

       return currentBoard
      }
      
      return ArrBoard
      
      
      }  ))
  
  
    }

function dropCardHandler(e,board){

  const currentId = board.items.map(item => item.id)

  if (!currentId.includes(currentItem.id)) {
    board.items.push(currentItem)
           const currentIndex = currentBoard.items.indexOf(currentItem)
           currentBoard.items.splice(currentIndex, 1)
           setBoards(boards.map((ArrBoard)=>{

            if(ArrBoard.id===board.id){
      
              return   board
              
            }

            if(ArrBoard.title===currentBoard.title)
            {
      
             return currentBoard
            }
            
            return ArrBoard
            
            
            }  ))
        }

}

  return (
    <div className={classes.App}>

 {boards.map((board) => (
            <div 
            key={board.id}
            className={classes.card}
            
            onDragOver={(e)=>dragOverHandler(e)}
            onDrop={(e)=>dropCardHandler(e,board)}
            >
            {board.title}

            {board.items.map((item) => (
            <div 
            key={item.id}
            className={classes.task}

            onDragOver={(e)=>dragOverHandler(e)}
            onDragLeave={(e)=>dragLeaveHandler(e)}
            onDragStart={(e)=>dragStartHandler(e,board,item)}
            onDragEnd={(e)=>dragEndHandler(e)}
            onDrop={(e)=>dropHandler(e,board,item)}

            draggable={true}
  
            >
            {item.descpition}
            </div>))}
    
           
      
            </div>))}
    </div>
    
  
              )    }

export default App;
