import { combineReducers } from "redux";
import  change_cur_item  from './change_cur_item';
import  change_cur_board  from './change_cur_board';
import  change_all_boards  from './change_all_boards';


const CombineReduce = combineReducers({
    change_cur_item,
    change_cur_board,
    change_all_boards,

})

export default CombineReduce