import produce from 'immer';
import {
  GET_PROJECT_STATUS_LIST,
  GET_PROJECT_STATUS,
  DELETE_PROJECT_STATUS,
  CREATE_PROJECT_STATUS,
  EDIT_PROJECT_STATUS,
  MOVE_TO_NEXT_PAGE,
  MOVE_TO_PREVIOUS_PAGE,
  LIMIT_PROJECT_STATUS,
} from './ProjectStatus.constants';

import {totalPage} from '../../utils/totalPage'

const intialState = {
  length: 0,
  data: [],
  totalPage: 1,
};

export const projectStatusReducer = (state = intialState, action) =>{
  return produce(state, draftState =>{
    switch (action.type){
      case GET_PROJECT_STATUS_LIST:
        draftState.data = action.payload;
        draftState.length = action.payload.length;
        draftState.totalPage = totalPage(draftState.length, LIMIT_PROJECT_STATUS);
        break;

      case GET_PROJECT_STATUS:
        break;
      
      case CREATE_PROJECT_STATUS:
        draftState.length++;        
        draftState.totalPage = totalPage(draftState.data, LIMIT_PROJECT_STATUS);
        break;

      case DELETE_PROJECT_STATUS:
        draftState.length--;
        draftState.totalPage = totalPage(draftState.length, LIMIT_PROJECT_STATUS);
        draftState.page = draftState.totalPage <draftState.page 
        ? draftState-1 : draftState.page;
        break;
      
      case EDIT_PROJECT_STATUS:
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
