import React from 'react';
import { Departments } from '../../../modules/Departments/components/Departments';

const DepartmentsPage = () => {
  return (
    <div className='flex-1'>
      <div className=' w-11/12 flex flex-col mx-auto my-0'>
        <Departments />
      </div>
    </div>
  );
};

export default DepartmentsPage;
