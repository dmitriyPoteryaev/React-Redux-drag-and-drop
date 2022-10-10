
import {CHANGE_CUR_ITEM} from '../board_and_item'


const change_cur_item = (state={ task:null}, {type, payload}) =>{

switch(type){

case CHANGE_CUR_ITEM : return {...state, task: payload}
default: return state

}

}

export default change_cur_item