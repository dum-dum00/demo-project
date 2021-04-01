import React from "react";
import DetailCustomers from "../../../modules/Customers/components/DetailCustomers";

function CustomersDetail() {
  return (
    <div className=" flex-1">
      <div className=" w-11/12 flex flex-col mx-auto my-5">
        <DetailCustomers />
      </div>
    </div>
  );
}

export default CustomersDetail;
