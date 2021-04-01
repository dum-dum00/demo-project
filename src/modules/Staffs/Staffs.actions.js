import {
  GET_STAFFS_LIST,
  GET_STAFFS,
  DELETE_STAFFS,
  CREATE_STAFFS,
  EDIT_STAFFS,
  MOVE_TO_NEXT_PAGE,
  MOVE_TO_PREVIOUS_PAGE,
} from './Staffs.constants';

export const getStaffsList = data => {
  return {
    type: GET_STAFFS_LIST,
    payload: data,
  };
};


export const getStaffsDetail = data => {
  return {
    type: GET_STAFFS,
    payload: data,
  };
};


export const createStaffs = data => {
  return {
    type: CREATE_STAFFS,
    payload: data,
  };
};

export const editStaffsDetail = data => {
  return {
    type: EDIT_STAFFS,
    payload: data,
  };
};

export const deleteStaffs = StaffsId => {
  return {
    type: DELETE_STAFFS,
    payload: StaffsId,
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
