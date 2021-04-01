import { setList, getList, updateDetail, deleteWid } from '../../services';

import { LIST_NAME } from './ProjectStatus.constants';

import {
  getProjectStatusList,
  getProjectStatusDetail,
  createProjectStatus,
  editProjectStatusDetail,
  deleteProjectStatus,
} from './actions'

export const createProjectStatusService = data => dispatch => {
  let list = getList(LIST_NAME) ? getList(LIST_NAME) : [];
  list.push(data);
  setList(LIST_NAME, list);
  if (data) {
    return dispatch(createProjectStatus(data));
  }
};

export const getProjectStatusListService = data => dispatch => {
  if (data) {
    return dispatch(getProjectStatusList(data));
  }
};

export const getProjectStatusDetailService = (data) => dispatch =>{
  if (data) {
    return dispatch(getProjectStatusDetail(data));
  }
}

export const editProjectStatusDetailService = (data) => dispatch => {
  if (data) {
    updateDetail(LIST_NAME, data)
    return dispatch(editProjectStatusDetail(data))
  }
}

export const deleteProjectStatusService = (id) => dispatch => {
  if (id) {
    deleteWid(LIST_NAME, id);
    return dispatch(deleteProjectStatus(id))
  }
}
