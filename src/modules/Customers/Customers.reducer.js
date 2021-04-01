import produce from 'immer';
import {
  GET_CUSTOMERS_LIST,
  GET_CUSTOMERS,
  DELETE_CUSTOMERS,
  CREATE_CUSTOMERS,
  EDIT_CUSTOMERS,
  MOVE_TO_NEXT_PAGE,
  MOVE_TO_PREVIOUS_PAGE,
  LIMIT_CUSTOMERS,
} from './Customers.constants';

import {totalPage} from '../../utils/totalPage'

const intialState = {
  length: 0,
  data: [],
  totalPage: 1,
};

export const customersReducer = (state = intialState, action) =>{
  return produce(state, draftState =>{
    switch (action.type){
      case GET_CUSTOMERS_LIST:
        draftState.data = action.payload;
        draftState.length = action.payload.length;
        draftState.totalPage = totalPage(draftState.length, LIMIT_CUSTOMERS);
        break;
      

      case GET_CUSTOMERS:
        break;
      
      case CREATE_CUSTOMERS:
        draftState.length++;        
        draftState.totalPage = totalPage(draftState.data, LIMIT_CUSTOMERS);
        break;
      
      case DELETE_CUSTOMERS:
        draftState.length--;
        draftState.totalPage = totalPage(draftState.length, LIMIT_CUSTOMERS);
        break;
      
      case EDIT_CUSTOMERS:
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
