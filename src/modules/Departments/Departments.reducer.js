import produce from 'immer';
import {
  GET_DEPARTMENTS_LIST,
  GET_DEPARTMENTS,
  DELETE_DEPARTMENTS,
  CREATE_DEPARTMENTS,
  EDIT_DEPARTMENTS,
  MOVE_TO_NEXT_PAGE,
  MOVE_TO_PREVIOUS_PAGE,
  LIMIT_DEPARTMENTS,
} from './Departments.constants';

import {totalPage} from '../../utils/totalPage'

const intialState = {
  length: 0,
  data: [],
  totalPage: 1,
};

export const departmentsReducer = (state = intialState, action) =>{
  return produce(state, draftState =>{
    switch (action.type){
      case GET_DEPARTMENTS_LIST:
        draftState.data = action.payload;
        draftState.length = action.payload.length;
        draftState.totalPage = totalPage(draftState.length,  LIMIT_DEPARTMENTS);
        break;
      

      case GET_DEPARTMENTS:
        break;
      
      case CREATE_DEPARTMENTS:
        draftState.length++;        
        draftState.totalPage = totalPage(draftState.data,LIMIT_DEPARTMENTS);
        break;
      
      case DELETE_DEPARTMENTS:
        draftState.length--;
        draftState.totalPage = totalPage(draftState.length,  LIMIT_DEPARTMENTS);
        break;
      
      case EDIT_DEPARTMENTS:
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
