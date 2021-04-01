import React from 'react';
import { ProjectStatus } from '../../../modules/ProjectStatus/components/ProjectStatus';

const ProjectStatusPage = () => {
  return (
    <div className='flex-1'>
      <div className=' w-11/12 flex flex-col mx-auto my-0'>
        <ProjectStatus />
      </div>
    </div>
  );
};

export default ProjectStatusPage;
