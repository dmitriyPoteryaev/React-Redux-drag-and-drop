import {CHANGE_CUR_BOARD} from '../board_and_item'


const change_cur_board = (state={ board:null}, {type, payload}) =>{

switch(type){

case CHANGE_CUR_BOARD : return {...state, board: payload}
default: return state

}

}

export default change_cur_board