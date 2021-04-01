import React from "react";
import EditProjects from "../../../modules/Projects/components/EditProjects"

function ProjectsEdit() {
  return (
    <div className=" flex-1">
      <div className=" w-11/12 flex flex-col mx-auto my-5">
        <EditProjects />
      </div>
    </div>
  );
}

export default ProjectsEdit;
