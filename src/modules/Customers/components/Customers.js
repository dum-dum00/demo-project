import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../../../services";
import { getCustomersListService } from "../Customers.services";
import { LIST_NAME, LIMIT_CUSTOMERS } from "../Customers.constants";
import { Pagination } from "../../../components/Pagination";
import { useHistory, useLocation } from "react-router-dom";
import { PATH_CUSTOMERS } from "../../../constants/path";
import CreateModal from "../../../utils/CreateModal";

import CreateCustomers from "./CreateCustomers";

export const Customers = () => {
  const customersList = useSelector((state) => state.customers.data);
  const { length, totalPage } = useSelector((state) => state.customers);

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const page =
    JSON.parse(new URLSearchParams(location.search).get("page")) || 1;

  useEffect(() => {
    const data = getList(LIST_NAME);
    dispatch(getCustomersListService(data));
  }, [dispatch, length]);

  const onClick = (item) => {
    history.push(`${PATH_CUSTOMERS}/${item.id}`);
  };

  const splitList = () => {
    return customersList.slice(
      LIMIT_CUSTOMERS * (page - 1),
      LIMIT_CUSTOMERS * [page]
    );
  };
  
  const [isOpen, setIsOpen] = useState(false);
  const toogleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white flex flex-col mt-10 rounded-xl shadow">
      <div className=" border-b border-gray-300 flex-row p-3">
        <span className="inline-flex text-xl font-bold p-3  ">Customers:</span>

          <button className='h-full text-white bg-green-700 hover:bg-green-500 opacity-75 rounded-xl inline-flex px-4 py-2 float-right mr-6' 
          onClick={toogleModal}> New
          
          <i class="fa fa-plus ml-1" aria-hidden="true"></i>
          </button>
        {isOpen ? (
          <CreateModal onClose={toogleModal}>
            <CreateCustomers onClose={toogleModal} />
          </CreateModal>
        ) : null}
      </div>
      <div className="h-full flex w-4/5 mx-auto  rounded-xl items-center">
        <div className="p-4 text-center	my-2 px-10 flex-row rounded-xl w-full">
          <table className="w-full border-collapse text-lg">
            <thead className="bg-blue-500">
              <tr className=" text-white text-xl">
                <th className="border border-blue-500 ">Namescreen</th>
                <th className="border border-blue-500 ">Description</th>
                <th className="border border-blue-500 ">Priority</th>
                <th className="border border-blue-500 ">Status</th>
              </tr>
              <tr></tr>
            </thead>
            <tbody>
              {splitList().map((item, index) => (
                <tr
                  key={index}
                  className="cursor-pointer hover:bg-gray-200"
                  onClick={() => onClick(item)}
                >
                  <td className="border border-blue-500">{item.name}</td>
                  <td className="border border-blue-500">{item.description}</td>
                  <td className="border border-blue-500">{item.priority}</td>
                  <td className="border border-blue-500">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            next={() => {
              history.push(`${PATH_CUSTOMERS}?page=${page + 1}`);
            }}
            previous={() => {
              history.push(`${PATH_CUSTOMERS}?page=${page - 1}`);
            }}
            page={page}
            totalPage={totalPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;
