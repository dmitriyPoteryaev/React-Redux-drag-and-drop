import {CHANGE_ALL_BOARDS} from '../board_and_item'




const change_all_boards = (state=[
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
    ],}
    
    
], {type, payload}) =>{

       
switch(type){
    

case CHANGE_ALL_BOARDS : return state.map((ArrBoard)=>{

    if(ArrBoard.id===payload[1]){
 
      return   payload[0]
      
    }
    if(ArrBoard.title===payload[2])
    {
 
     return payload[3]
    }
    
    return ArrBoard
    
    
    }  )
default: return state

}

}

export default change_all_boards