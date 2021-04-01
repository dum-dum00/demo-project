import React from "react";
import EditDepartments from "../../../modules/Departments/components/EditDepartments";

function DepartmentsDetail() {
  return (
    <div className=" flex-1">
      <div className=" w-11/12 flex flex-col mx-auto my-5">
        <EditDepartments />
      </div>
    </div>
  );
}

export default DepartmentsDetail;
