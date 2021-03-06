import React from "react";
import DetailProjectStatus from "../../../modules/ProjectStatus/components/DetailProjectStatus"

function ProjectStatusDetail() {
  return (
    <div className=" flex-1">
      <div className=" w-11/12 flex flex-col mx-auto my-5">
        <DetailProjectStatus />
      </div>
    </div>
  );
}

export default ProjectStatusDetail;
