import produce from 'immer';
import {
  GET_PROJECT_TYPE_LIST,
  GET_PROJECT_TYPE,
  DELETE_PROJECT_TYPE,
  CREATE_PROJECT_TYPE,
  EDIT_PROJECT_TYPE,
  MOVE_TO_NEXT_PAGE,
  MOVE_TO_PREVIOUS_PAGE,
  LIMIT_PROJECT_TYPE,
} from './ProjectType.constants';

import {totalPage} from '../../utils/totalPage'

const intialState = {
  length: 0,
  data: [],
  totalPage: 1,
};

export const projectTypeReducer = (state = intialState, action) =>{
  return produce(state, draftState =>{
    switch (action.type){
      case GET_PROJECT_TYPE_LIST:
        draftState.data = action.payload;
        draftState.length = action.payload.length;
        draftState.totalPage = totalPage(draftState.length, LIMIT_PROJECT_TYPE);
        break;

      case GET_PROJECT_TYPE:
        break;
      
      case CREATE_PROJECT_TYPE:
        draftState.length++;        
        draftState.totalPage = totalPage(draftState.data, LIMIT_PROJECT_TYPE);
        break;

      case DELETE_PROJECT_TYPE:
        draftState.length--;
        draftState.totalPage = totalPage(draftState.length, LIMIT_PROJECT_TYPE);
        break;
      
      case EDIT_PROJECT_TYPE:
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
