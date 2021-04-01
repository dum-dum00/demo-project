import {
  GET_PROJECTS_LIST,
  GET_PROJECTS,
  DELETE_PROJECTS,
  CREATE_PROJECTS,
  EDIT_PROJECTS,
  MOVE_TO_NEXT_PAGE,
  MOVE_TO_PREVIOUS_PAGE,
} from './Projects.constants';

export const getProjectsList = data => {
  return {
    type: GET_PROJECTS_LIST,
    payload: data,
  };
};

export const getProjectsDetail = data => {
  return {
    type: GET_PROJECTS,
    payload: data,
  };
};

export const createProjects = data => {
  return {
    type: CREATE_PROJECTS,
    payload: data,
  };
};

export const editProjectsDetail = data => {
  return {
    type: EDIT_PROJECTS,
    payload: data,
  };
};

export const deleteProjects = ProjectsId => {
  return {
    type: DELETE_PROJECTS,
    payload: ProjectsId,
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
