import {
  GET_DEPARTMENTS_LIST,
  GET_DEPARTMENTS,
  DELETE_DEPARTMENTS,
  CREATE_DEPARTMENTS,
  EDIT_DEPARTMENTS,
  MOVE_TO_NEXT_PAGE,
  MOVE_TO_PREVIOUS_PAGE,
} from './Departments.constants';

export const getDepartmentsList = data => {
  return {
    type: GET_DEPARTMENTS_LIST,
    payload: data,
  };
};

export const getDepartmentsDetail = data => {
  return {
    type: GET_DEPARTMENTS,
    payload: data,
  };
};

export const createDepartments = data => {
  return {
    type: CREATE_DEPARTMENTS,
    payload: data,
  };
};

export const editDepartmentsDetail = data => {
  return {
    type: EDIT_DEPARTMENTS,
    payload: data,
  };
};

export const deleteDepartments = DepartmentsId => {
  return {
    type: DELETE_DEPARTMENTS,
    payload: DepartmentsId,
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
