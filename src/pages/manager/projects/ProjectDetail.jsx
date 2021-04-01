import React from "react";
import DetailProjects from "../../../modules/Projects/components/DetailProjects"

function ProjectDetail() {
  return (
    <div className=" flex-1">
      <div className=" w-11/12 flex flex-col mx-auto my-5">
        <DetailProjects />
      </div>
    </div>
  );
}

export default ProjectDetail;
