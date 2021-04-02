import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../../services';
import { getStaffsListService } from '../Staffs.services';
import { LIST_NAME, LIMIT_STAFFS } from '../Staffs.constants';
import { Pagination } from '../../../components/Pagination';
import { useHistory, useLocation } from 'react-router-dom';
import { PATH_STAFFS } from '../../../constants/path';
import CreateStaffs from './CreateStaffs';
import CreateModal from "../../../utils/CreateModal";

export const Staffs = () => {
  const staffsList = useSelector(state => state.staffs.data);
  const { length, totalPage } = useSelector(state => state.staffs);

  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const page = JSON.parse(new URLSearchParams(location.search).get('page')) || 1;

  useEffect(() => {
    const data = getList(LIST_NAME);
    dispatch(getStaffsListService(data));
  }, [dispatch, length]);


  const splitList = () => {
    return staffsList.slice(LIMIT_STAFFS * (page - 1), LIMIT_STAFFS * page);
  };

  const onClick = item => {
    history.push(`${PATH_STAFFS}/${item.id}`);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toogleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white flex flex-col mt-10 rounded-xl shadow">
      <div className=" border-b border-gray-300 flex-row p-3">
        <span className="inline-flex text-xl font-bold p-3  ">Staffs:</span>

          <button className='h-full text-white bg-green-700 hover:bg-green-500 opacity-75 rounded-xl inline-flex px-4 py-2 float-right mr-6' 
          onClick={toogleModal}> New
          
          <i class="fa fa-plus ml-1" aria-hidden="true"></i>
          </button>
        {isOpen ? (
          <CreateModal onClose={toogleModal}>
            <CreateStaffs onClose={toogleModal} />
          </CreateModal>
        ) : null}
      </div>
      <div className="h-full flex w-4/5 mx-auto  rounded-xl items-center">
        <div className="p-4 text-center	my-2 px-10 flex-row rounded-xl w-full">
        <table className='w-full border-collapse text-lg'>
          <thead className='bg-blue-500'>
            <tr className=' text-white text-xl'>
              <th className='border border-blue-500 '>Name</th>
              <th className='border border-blue-500 '>Email</th>
            </tr>
          </thead>
          <tbody>
            {splitList().map((item, index) => (
              <tr onClick={() => onClick(item)} key={index} className=' cursor-pointer hover:bg-gray-200'>
                <td className='border border-blue-500'>{item.name}</td>
                <td className='border border-blue-500'>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          next={() => {
            history.push(`${PATH_STAFFS}?page=${page + 1}`);
          }}
          previous={() => {
            history.push(`${PATH_STAFFS}?page=${page - 1}`);
          }}
          page={page}
          totalPage={totalPage}
        />
        
      </div>
     
      </div>
    </div>
  );
};

export default Staffs;
