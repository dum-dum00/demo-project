import React from 'react';

// import Route from './components/Route';

import Login from './components/Login';

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import SideNav from './components/SideNav';
import Menu from './components/Menu';
import Home from './pages/home/Home'

// import ProjectType from './modules/ProjectType/components/ProjectType';
// import DetailProjectType from './modules/ProjectType/components/DetailProjectType'
import ProjectStatus from './modules/ProjectStatus/components/ProjectStatus';
import Customers from './modules/Customers/components/Customers';
import Departments from './modules/Departments/components/Departments';
import Projects from './modules/Projects/components/Projects';
import Staffs from './modules/Staffs/components/Staffs';
import TechStack from './modules/TechStack/components/TechStack';

const App = () => {
  return (
    <Router>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
      <Route path='/' component={Home} />
    </Router>

    // <div className='rounded-md mx-1 mr-2'>
    //   <div className='h-screen flex overflow-hidden my-2 rounded-xl '>
    //     <SideNav />
    //     <main className='flex-1 flex flex-col rounded-xl w-full  mx-2 ml-5'>
    //       <br></br>
    //       <div
    //         className=' bg-white dark:bg-gray-700 transition
		// duration-500 escreenase-in-out overflow-y-auto h-screen rounded-xl  '
    //       >
    //         <Route path='/'>
    //           <ProjectType />
    //         </Route>
           
    //         <Route path='/projectStatus'>
    //           <ProjectStatus />
    //         </Route>
    //         <Route path='/techStack'>
    //           <TechStack />
    //         </Route>
    //         <Route path='/customers'>
    //           <Customers />
    //         </Route>
            
    //         <Route path='/departments'>
    //           <Departments />
    //         </Route>
    //         <Route path='/staffs'>
    //           <Staffs />
    //         </Route>
    //         <Route path='/projects'>
    //           <Projects />
    //         </Route>
    //       </div>
    //     </main>
    //   </div>
    // </div>
  );
};

export default App;
