import React from "react";
import EditProjectStatus from "../../../modules/ProjectStatus/components/EditProjectStatus"

function ProjectStatusEdit() {
  return (
    <div className=" flex-1">
      <div className=" w-11/12 flex flex-col mx-auto my-5">
        <EditProjectStatus />
      </div>
    </div>
  );
}

export default ProjectStatusEdit;
