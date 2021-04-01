import {
  GET_PROJECT_STATUS_LIST,
  GET_PROJECT_STATUS,
  DELETE_PROJECT_STATUS,
  CREATE_PROJECT_STATUS,
  EDIT_PROJECT_STATUS,
  MOVE_TO_NEXT_PAGE,
  MOVE_TO_PREVIOUS_PAGE,
} from '../ProjectStatus.constants';

export const getProjectStatusList = data => {
  return {
    type: GET_PROJECT_STATUS_LIST,
    payload: data,
  };
};

export const getProjectStatusDetail = data => {
  return {
    type: GET_PROJECT_STATUS,
    payload: data,
  };
};


export const createProjectStatus = data => {
  return {
    type: CREATE_PROJECT_STATUS,
    payload: data,
  };
};


export const editProjectStatusDetail = data => {
  return {
    type: EDIT_PROJECT_STATUS,
    payload: data,
  };
};


export const deleteProjectStatus = ProjectStatusId => {
  return {
    type: DELETE_PROJECT_STATUS,
    payload: ProjectStatusId,
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
