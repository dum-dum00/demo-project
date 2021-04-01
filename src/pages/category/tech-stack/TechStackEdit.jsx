import React from "react";
import EditTechStack from "../../../modules/TechStack/components/EditTechStack";

function TechStackEdit() {
  return (
    <div className=" flex-1">
      <div className=" w-11/12 flex flex-col mx-auto my-5">
        <EditTechStack />
      </div>
    </div>
  );
}

export default TechStackEdit;
