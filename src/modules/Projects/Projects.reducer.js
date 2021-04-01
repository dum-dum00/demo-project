import produce from 'immer';
import {
  GET_PROJECTS_LIST,
  GET_PROJECTS,
  DELETE_PROJECTS,
  CREATE_PROJECTS,
  EDIT_PROJECTS,
  MOVE_TO_NEXT_PAGE,
  MOVE_TO_PREVIOUS_PAGE,
  LIMIT_PROJECTS,
} from './Projects.constants';

import {totalPage} from '../../utils/totalPage'

const intialState = {
  length: 0,
  data: [],
  totalPage: 1,
};

export const projectsReducer = (state = intialState, action) =>{
  return produce(state, draftState =>{
    switch (action.type){
      case GET_PROJECTS_LIST:
        draftState.data = action.payload;
        draftState.length = action.payload.length;
        draftState.totalPage = totalPage(draftState.length, LIMIT_PROJECTS);
        break;
 
      case GET_PROJECTS:
        break;
      
      case CREATE_PROJECTS:
        draftState.length++;        
        draftState.totalPage = totalPage(draftState.data,  LIMIT_PROJECTS);
        break;
 
      case DELETE_PROJECTS:
        draftState.length--;
        draftState.totalPage = totalPage(draftState.length,  LIMIT_PROJECTS);
        break;
      
      case EDIT_PROJECTS:
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
