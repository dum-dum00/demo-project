import produce from 'immer';
import {
  GET_STAFFS_LIST,
  GET_STAFFS,
  DELETE_STAFFS,
  CREATE_STAFFS,
  EDIT_STAFFS,
  MOVE_TO_NEXT_PAGE,
  MOVE_TO_PREVIOUS_PAGE,
  LIMIT_STAFFS,
} from './Staffs.constants';

import {totalPage} from '../../utils/totalPage'

const intialState = {
  length: 0,
  data: [],
  totalPage: 1,
};

export const staffsReducer = (state = intialState, action) =>{
  return produce(state, draftState =>{
    switch (action.type){
      case GET_STAFFS_LIST:
        draftState.data = action.payload;
        draftState.length = action.payload.length;
        draftState.totalPage = totalPage(draftState.length, LIMIT_STAFFS);
        break;
      
      case GET_STAFFS:
        break;
      
      case CREATE_STAFFS:
        draftState.length++;        
        draftState.totalPage = totalPage(draftState.data, LIMIT_STAFFS);
        break;
      
      case DELETE_STAFFS:
        draftState.length--;
        draftState.totalPage = totalPage(draftState.length,  LIMIT_STAFFS);
        break;
      
      case EDIT_STAFFS:
        break;
      
      case MOVE_TO_NEXT_PAGE:
        draftState.page = draftState.page >= draftState.totalPage ? draftState.page : ++draftState.page;
        break;
      case MOVE_TO_PREVIOUS_PAGE:
        draftState.page = draftState.page <= 1 ? draftState.page : --draftState.page;
        break;
      
      default:
        return state;
      
    }
      
  })
}
