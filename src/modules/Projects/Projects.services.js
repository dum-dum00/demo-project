import { setList, getList, updateDetail, deleteWid } from '../../services';

import { LIST_NAME } from './Projects.constants';

import {
  getProjectsList,
  getProjectsDetail,
  createProjects,
  editProjectsDetail,
  deleteProjects,
 
} from './Projects.actions'

export const createProjectServices = data => dispatch => {
  let list = getList(LIST_NAME) ? getList(LIST_NAME) : [];
  list.push(data);
  setList(LIST_NAME, list);
  if (data) {
    return dispatch(createProjects(data));
  }
};

export const getProjectsListServices = data => dispatch => {
  if (data) {
    return dispatch(getProjectsList(data));
  }
};

export const getProjectsDetailServices = (data) => dispatch =>{
  if (data) {
    return dispatch(getProjectsDetail(data));
  }
}

export const editProjectsDetailServices = (data) => dispatch => {
  if (data) {
    updateDetail(LIST_NAME, data)
    return dispatch(editProjectsDetail(data))
  }
}

export const deleteProjectsServices = (id) => dispatch => {
  if (id) {
    deleteWid(LIST_NAME, id);
    return dispatch(deleteProjects(id))
  }
}
