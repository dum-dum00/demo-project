import { combineReducers } from 'redux'
import { projectTypeReducer} from '../modules/ProjectType/ProjectType.reducer'
import { projectStatusReducer } from '../modules/ProjectStatus/ProjectStatus.reducer'
import { techStackReducer} from '../modules/TechStack/TechStack.reducer'
import { customersReducer } from '../modules/Customers/Customers.reducer'
import { staffsReducer } from '../modules/Staffs/Staffs.reducer'
import { departmentsReducer } from '../modules/Departments/Departments.reducer'
import { projectsReducer } from '../modules/Projects/Projects.reducer'

export const combinedReducers = combineReducers({
  projectTypes: projectTypeReducer,
  projectStatus: projectStatusReducer,
  techStack: techStackReducer,
  customers: customersReducer,
  staffs: staffsReducer,
  departments: departmentsReducer,
  projects: projectsReducer,
})