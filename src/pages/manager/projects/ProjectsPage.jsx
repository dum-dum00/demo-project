import React from 'react';
import { Projects } from '../../../modules/Projects/components/Projects';

const ProjectsPage = () => {
  return (
    <div className='flex-1'>
      <div className=' w-11/12 flex flex-col mx-auto my-0'>
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
