import {
  GET_TECH_STACK_LIST,
  GET_TECH_STACK,
  DELETE_TECH_STACK,
  CREATE_TECH_STACK,
  EDIT_TECH_STACK,
  MOVE_TO_NEXT_PAGE,
  MOVE_TO_PREVIOUS_PAGE,
} from '../TechStack.constants';

export const getTechStackList = data => {
  return {
    type: GET_TECH_STACK_LIST,
    payload: data,
  };
};


export const getTechStackDetail = data => {
  return {
    type: GET_TECH_STACK,
    payload: data,
  };
};

export const createTechStack = data => {
  return {
    type: CREATE_TECH_STACK,
    payload: data,
  };
};

export const editTechStackDetail = data => {
  return {
    type: EDIT_TECH_STACK,
    payload: data,
  };
};

export const deleteTechStack = TechStackId => {
  return {
    type: DELETE_TECH_STACK,
    payload: TechStackId,
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
