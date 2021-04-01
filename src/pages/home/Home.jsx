import React from 'react';
import { routers } from '../../router.config';
import { Switch, Redirect, Route } from 'react-router-dom';
import SideNav from '../../components/SideNav';
import Menu from '../../components/Menu'

export default function Home() {
  const RouterList = () => {
    return routers.map((route, index) => (
      <Route exact={route.exact} key={index} path={route.path} component={route.component} />
    ));
  };
  return (
    <div className='rounded-md mx-1 mr-2'>
      <div className='h-screen flex overflow-hidden my-3 rounded-xl '>
        <SideNav />
        <main className='flex-1 flex flex-col rounded-xl w-full h-full mx-2 my-0 ml-5'>
          <Menu />
          <br></br>
          <div
            className=' bg-white dark:bg-gray-700 transition
		duration-500 escreenase-in-out overflow-y-auto h-screen rounded-xl  '
          >
           
            <Switch>{RouterList()}</Switch>
          </div>
        </main>
      </div>
    </div>
  );
}
