import {
  GET_CUSTOMERS_LIST,
  GET_CUSTOMERS,
  DELETE_CUSTOMERS,
  CREATE_CUSTOMERS,
  EDIT_CUSTOMERS,
  MOVE_TO_NEXT_PAGE,
  MOVE_TO_PREVIOUS_PAGE,
} from './Customers.constants';

export const getCustomersList = data => {
  return {
    type: GET_CUSTOMERS_LIST,
    payload: data,
  };
};


export const getCustomersDetail = data => {
  return {
    type: GET_CUSTOMERS,
    payload: data,
  };
};


export const createCustomers = data => {
  return {
    type: CREATE_CUSTOMERS,
    payload: data,
  };
};

export const editCustomersDetail = data => {
  return {
    type: EDIT_CUSTOMERS,
    payload: data,
  };
};


export const deleteCustomers = CustomersId => {
  return {
    type: DELETE_CUSTOMERS,
    payload: CustomersId,
  };
};

export const moveToNextPage = () => {
  return {
    type: MOVE_TO_NEXT_PAGE,
  };
};

export const moveToPreviousPage = () => {
  return {
    type: MOVE_TO_PREVIOUS_PAGE,
  };
};
