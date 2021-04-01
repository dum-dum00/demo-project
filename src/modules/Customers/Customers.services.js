import { setList, getList, updateDetail, deleteWid } from '../../services';

import { LIST_NAME } from './Customers.constants';

import {
  getCustomersList,
  getCustomersDetail,
  createCustomers,
  editCustomersDetail,
  deleteCustomers,
} from './Customers.actions'

export const createCustomersService = data => dispatch => {
  let list = getList(LIST_NAME) ? getList(LIST_NAME) : [];
  list.push(data);
  setList(LIST_NAME, list);
  if (data) {
    return dispatch(createCustomers(data));
  }
};

export const getCustomersListService = data => dispatch => {
  if (data) {
    return dispatch(getCustomersList(data));
  }
};

export const getCustomersDetailService = (data) => dispatch =>{
  if (data) {
    return dispatch(getCustomersDetail(data));
  }
}

export const editCustomersDetailService = (data) => dispatch => {
  if (data) {
    updateDetail(LIST_NAME, data)
    return dispatch(editCustomersDetail(data))
  }
}

export const deleteCustomersService = (id) => dispatch => {
  if (id) {
    deleteWid(LIST_NAME, id);
    return dispatch(deleteCustomers(id))
  }
}
