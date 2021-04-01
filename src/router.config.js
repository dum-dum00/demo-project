import ProjectTypeEdit from './pages/category/project-type/ProjectTypeEdit'
import ProjectTypePage from './pages/category/project-type/ProjectTypePage'
import  ProjectTypeDetail from './pages/category/project-type/ProjectTypeDetail'

import CustomersPage from './pages/category/customers/CustomersPage'
import CustomersDetail from './pages/category/customers/CustomersDetail'
import CustomersEdit from './pages/category/customers/CustomersEdit'

import ProjectStatusPage from './pages/category/project-status/ProjectStatusPage'
import ProjectStatusDetail from './pages/category/project-status/ProjectStatusDetail'
import ProjectStatusEdit from './pages/category/project-status/ProjectStatusEdit'

import TechStackPage from './pages/category/tech-stack/TechStackPage'
import TechStackDetail from './pages/category/tech-stack/TechStackDetail'
import TechStackEdit from './pages/category/tech-stack/TechStackEdit'

import DepartmentsPage from './pages/manager/departments/DepartmentsPage'
import DepartmentsDetail from './pages/manager/departments/DepartmentsDetail'
import DepartmentsEdit from './pages/manager/departments/DepartmentsEdit'

import ProjectsPage from './pages/manager/projects/ProjectsPage'
import ProjectDetail from './pages/manager/projects/ProjectDetail'
import ProjectsEdit from './pages/manager/projects/ProjectsEdit'


import StaffsPage from './pages/manager/staffs/StaffsPage'
import StaffDetail from './pages/manager/staffs/StaffDetail'
import StaffEdit from './pages/manager/staffs/StaffEdit'

export const routers = [
  { path: "/projectType", exact: true, component: ProjectTypePage },
  { path: "/projectType/:id", exact: true, component: ProjectTypeDetail },
  { path: "/projectType/:id/edit", exact: true, component: ProjectTypeEdit },

  { path: "/customers", exact: true, component: CustomersPage },
  { path: "/customers/:id", exact: true, component: CustomersDetail },
  { path: "/customers/:id/edit", exact: true, component: CustomersEdit },
  
  
  { path: "/projectStatus", exact: true, component: ProjectStatusPage },
  { path: "/projectStatus/:id", exact: true, component: ProjectStatusDetail },
  { path: "/projectStatus/:id/edit", exact: true, component: ProjectStatusEdit },

  
  { path: "/techStack", exact: true, component: TechStackPage },
  { path: "/techStack/:id", exact: true, component: TechStackDetail },
  { path: "/techStack/:id/edit", exact: true, component: TechStackEdit },

  { path: "/departments", exact: true, component: DepartmentsPage },
  { path: "/departments/:id", exact: true, component: DepartmentsDetail },
  { path: "/departments/:id/edit", exact: true, component: DepartmentsEdit },
  
  { path: "/staffs", exact: true, component: StaffsPage },
  { path: "/staffs/:id", exact: true, component: StaffDetail },
  { path: "/staffs/:id/edit", exact: true, component: StaffEdit },

  
  { path: "/projects", exact: true, component: ProjectsPage },
  { path: "/projects/:id", exact: true, component: ProjectDetail },
  { path: "/projects/:id/edit", exact: true, component: ProjectsEdit },

]

