import { setList, getList, updateDetail, deleteWid } from '../../services';

import { LIST_NAME } from './Departments.constants';

import {
  getDepartmentsList,
  getDepartmentsDetail,
  createDepartments,
  editDepartmentsDetail,
  deleteDepartments,
} from './Departments.actions'

export const createDepartmentsService = data => dispatch => {
  let list = getList(LIST_NAME) ? getList(LIST_NAME) : [];
  list.push(data);
  setList(LIST_NAME, list);
  if (data) {
    return dispatch(createDepartments(data));
  }
};

export const getDepartmentsListService = data => dispatch => {
  if (data) {
    return dispatch(getDepartmentsList(data));
  }
};

export const getDepartmentsDetailService = (data) => dispatch =>{
  if (data) {
    return dispatch(getDepartmentsDetail(data));
  }
}

export const editDepartmentsDetailService = (data) => dispatch => {
  if (data) {
    updateDetail(LIST_NAME, data)
    return dispatch(editDepartmentsDetail(data))
  }
}

export const deleteDepartmentsService = (id) => dispatch => {
  if (id) {
    deleteWid(LIST_NAME, id);
    return dispatch(deleteDepartments(id))
  }
}
