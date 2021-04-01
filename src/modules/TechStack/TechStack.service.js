import { setList, getList, updateDetail, deleteWid } from '../../services';

import { LIST_NAME } from './TechStack.constants';

import {
  getTechStackList,
  getTechStackDetail,
  createTechStack,
  editTechStackDetail,
  deleteTechStack,
} from './actions'

export const createTechStackService = data => dispatch => {
  let list = getList(LIST_NAME) ? getList(LIST_NAME) : [];
  list.push(data);
  setList(LIST_NAME, list);
  if (data) {
    return dispatch(createTechStack(data));
  }
};

export const getTechStackListService = data => dispatch => {
  if (data) {
    return dispatch(getTechStackList(data));
  }
};

export const getTechStackDetailService = (data) => dispatch =>{
  if (data) {
    return dispatch(getTechStackDetail(data));
  }
}

export const editTechStackDetailService = (data) => dispatch => {
  if (data) {
    updateDetail(LIST_NAME, data)
    return dispatch(editTechStackDetail(data))
  }
}

export const deleteTechStackService = (id) => dispatch => {
  if (id) {
    deleteWid(LIST_NAME, id);
    return dispatch(deleteTechStack(id))
  }
}
