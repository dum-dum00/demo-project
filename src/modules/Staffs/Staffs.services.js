import { setList, getList, updateDetail, deleteWid } from '../../services';

import { LIST_NAME } from './Staffs.constants';

import {
  getStaffsList,
  getStaffsDetail,
  createStaffs,
  editStaffsDetail,
  deleteStaffs,
} from './Staffs.actions'

export const createStaffsService = data => dispatch => {
  let list = getList(LIST_NAME) ? getList(LIST_NAME) : [];
  list.push(data);
  setList(LIST_NAME, list);
  if (data) {
    return dispatch(createStaffs(data));
  }
};

export const getStaffsListService = data => dispatch => {
  if (data) {
    return dispatch(getStaffsList(data));
  }
};

export const getStaffsDetailService = (data) => dispatch =>{
  if (data) {
    return dispatch(getStaffsDetail(data));
  }
}

export const editStaffsDetailService = (data) => dispatch => {
  if (data) {
    updateDetail(LIST_NAME, data)
    return dispatch(editStaffsDetail(data))
  }
}

export const deleteStaffsService = (id) => dispatch => {
  if (id) {
    deleteWid(LIST_NAME, id);
    return dispatch(deleteStaffs(id))
  }
}
