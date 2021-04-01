import React from "react";
import {EditCustomers} from '../../../modules/Customers/components/EditCustomers';

export const CustomersEdit =() => {
  return (
    <div className=" flex-1">
      <div className=" w-11/12 flex flex-col mx-auto ">
        <EditCustomers />
      </div>
    </div>
  );
}

export default CustomersEdit;
