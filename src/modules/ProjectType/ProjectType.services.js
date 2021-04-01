import { setList, getList, updateDetail, deleteWid } from '../../services';

import { LIST_NAME } from './ProjectType.constants';

import {
  getProjectTypeList,
  getProjectTypeDetail,
  createProjectType,
  editProjectTypeDetail,
  deleteProjectType,

} from './ProjectType.action';

export const createProjectTypeService = data => dispatch => {
  let list = getList(LIST_NAME) ? getList(LIST_NAME) : [];
  list.push(data);
  setList(LIST_NAME, list);
  if (data) {
    return dispatch(createProjectType(data));
  }
};

export const getProjectTypeListService = data => dispatch => {
  if (data) {
    return dispatch(getProjectTypeList(data));
  }
};

export const getProjectTypeDetailService = (data) => dispatch =>{
  if (data) {
    return dispatch(getProjectTypeDetail(data));
  }
}

export const editProjectTypeDetailService = (data) => dispatch => {
  if (data) {
    updateDetail(LIST_NAME, data)
    return dispatch(editProjectTypeDetail(data))
  }
}

export const deleteProjectTypeService = (id) => dispatch => {
  if (id) {
    deleteWid(LIST_NAME, id);
    return dispatch(deleteProjectType(id))
  }
}
