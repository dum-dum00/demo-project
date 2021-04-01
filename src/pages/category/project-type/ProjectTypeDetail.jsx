import React from "react";
import { DetailProjectType} from '../../../modules/ProjectType/components/DetailProjectType';

export const ProjectTypeDetail =() => {
  return (
    <div className=" flex-1">
      <div className=" w-10/12 flex flex-col mx-auto ">
        <DetailProjectType />
      </div>
    </div>
  );
}

export default ProjectTypeDetail;
// 