import React from 'react';
import {Customers} from '../../../modules/Customers/components/Customers'

const CustomerPage = () => {
  return (
    <div className=' flex-1'>
      <div className=' w-11/12 flex flex-col mx-auto my-0'>
        <Customers />
      </div>
    </div>
  );
};

export default CustomerPage;
