import React from 'react';
import { ProjectType} from '../../../modules/ProjectType/components/ProjectType';

const ProjectTypePage = () => {
  return (
    <div className=' flex-1'>
      <div className=' w-11/12 flex flex-col mx-auto my-0'>
        <ProjectType />
      </div>
    </div>
  );
};

export default ProjectTypePage;
