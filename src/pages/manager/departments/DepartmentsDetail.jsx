import React from "react";
import DetailDepartments from "../../../modules/Departments/components/DetailDepartments";

function DepartmentsDetail() {
  return (
    <div className=" flex-1">
      <div className=" w-11/12 flex flex-col mx-auto my-5">
        <DetailDepartments />
      </div>
    </div>
  );
}

export default DepartmentsDetail;
