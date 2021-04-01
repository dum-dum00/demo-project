import {
  GET_PROJECT_TYPE_LIST,
  GET_PROJECT_TYPE,
  DELETE_PROJECT_TYPE,
  CREATE_PROJECT_TYPE,
  EDIT_PROJECT_TYPE,
  MOVE_TO_NEXT_PAGE,
  MOVE_TO_PREVIOUS_PAGE,
} from '../ProjectType/ProjectType.constants';

export const getProjectTypeList = data => {
  return {
    type: GET_PROJECT_TYPE_LIST,
    payload: data,
  };
};


export const getProjectTypeDetail = data => {
  return {
    type: GET_PROJECT_TYPE,
    payload: data,
  };
};


export const createProjectType = data => {
  return {
    type: CREATE_PROJECT_TYPE,
    payload: data,
  };
};


export const editProjectTypeDetail = data => {
  return {
    type: EDIT_PROJECT_TYPE,
    payload: data,
  };
};

export const deleteProjectType = ProjectTypeId => {
  return {
    type: DELETE_PROJECT_TYPE,
    payload: ProjectTypeId,
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
