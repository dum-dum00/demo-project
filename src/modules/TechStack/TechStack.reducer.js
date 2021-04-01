import produce from 'immer';
import {
  GET_TECH_STACK_LIST,
  GET_TECH_STACK,
  DELETE_TECH_STACK,
  CREATE_TECH_STACK,
  EDIT_TECH_STACK,
  MOVE_TO_NEXT_PAGE,
  MOVE_TO_PREVIOUS_PAGE,
  LIMIT_TECH_STACK,
} from './TechStack.constants';

import { totalPage } from '../../utils/totalPage';

const intialState = {
  length: 0,
  data: [],
  totalPage: 1,
};

export const techStackReducer = (state = intialState, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case GET_TECH_STACK_LIST:
        draftState.data = action.payload;
        draftState.length = action.payload.length;
        draftState.totalPage = totalPage(draftState.length, LIMIT_TECH_STACK);
        break;

      case GET_TECH_STACK:
        break;

      case CREATE_TECH_STACK:
        draftState.length++;        
        draftState.totalPage = totalPage(draftState.data,  LIMIT_TECH_STACK);
        break;

      case DELETE_TECH_STACK:
        draftState.length--;
        draftState.totalPage = totalPage(draftState.length,LIMIT_TECH_STACK);
       
        break;

      case EDIT_TECH_STACK:
        break;

      case MOVE_TO_NEXT_PAGE:
        draftState.page =
          draftState.page >= draftState.totalPage ? draftState.page : ++draftState.page;
        break;
      case MOVE_TO_PREVIOUS_PAGE:
        draftState.page = draftState.page <= 1 ? draftState.page : --draftState.page;
        break;

      default:
        return state;
    }
  });
};
