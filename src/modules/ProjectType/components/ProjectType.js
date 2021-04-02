import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../../services';
import { getProjectTypeListService } from '../ProjectType.services';
import { LIST_NAME, LIMIT_PROJECT_TYPE } from '../ProjectType.constants';
import { Pagination } from '../../../components/Pagination';
import { useHistory, useLocation } from "react-router-dom";
import { PATH_PROJECT_TYPE} from '../../../constants/path'
import CreateModal from "../../../utils/CreateModal";


import CreateProjectType from './CreateProjectType';

export const ProjectType = () => {
  const projectTypeList = useSelector(state => state.projectTypes.data);
  const { length , totalPage } = useSelector(state => state.projectTypes);

  const location = useLocation()
  const history = useHistory();
  const dispatch = useDispatch();

  const page = JSON.parse(new URLSearchParams(location.search).get("page")) || 1;


  useEffect(() => {
    const data = getList(LIST_NAME);
    dispatch(getProjectTypeListService(data));
  }, [dispatch, length]);


  const splitList = () => {
    return projectTypeList.slice(LIMIT_PROJECT_TYPE * (page - 1), LIMIT_PROJECT_TYPE * page);
  };


  const onClick = item => {
    history.push(`${PATH_PROJECT_TYPE}/${item.id}`)
  };
 
  const [isOpen, setIsOpen] = useState(false);
  const toogleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white flex flex-col mt-10 rounded-xl shadow">
      <div className=" border-b border-gray-300 flex-row p-3">
        <span className="inline-flex text-xl font-bold p-3  ">Project Type:</span>

          <button className='h-full text-white bg-green-700 hover:bg-green-500 opacity-75 rounded-xl inline-flex px-4 py-2 float-right mr-6' 
          onClick={toogleModal}> New
          
          <i class="fa fa-plus ml-1" aria-hidden="true"></i>
          </button>
        {isOpen ? (
          <CreateModal onClose={toogleModal}>
            <CreateProjectType onClose={toogleModal} />
          </CreateModal>
        ) : null}
      </div>
      <div className="h-full flex w-4/5 mx-auto  rounded-xl items-center">
        <div className="p-4 text-center	my-2 px-10 flex-row rounded-xl w-full">
        <table className='w-full border-collapse text-lg'>
          <thead className='bg-blue-500'>
            <tr className=' text-white text-xl'>
              <th className='border border-blue-500 '>Name</th>
              <th className='border border-blue-500 '>Description</th>
              <th className='border border-blue-500 '>Priority</th>
              <th className='border border-blue-500 '>Status</th>
            </tr>
          </thead>
          <tbody>
            {splitList().map((item, index) => (
              <tr key={index} 
              className='cursor-pointer hover:bg-gray-200'
              onClick={()=>onClick(item)}>
                  <td className='border border-blue-500'>{item.name}</td>
                  <td className='border border-blue-500'>{item.description}</td>
                  <td className='border border-blue-500'>{item.priority}</td>
                  <td className='border border-blue-500'>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
        next={() => {
          history.push(`${PATH_PROJECT_TYPE}?page=${page + 1}`);
        }}
        previous={() => {
          history.push(`${PATH_PROJECT_TYPE}?page=${page - 1}`);
        }}
        page={page}
        totalPage={totalPage}
      />
      </div>

     
      </div>
    </div>
  );
};

export default ProjectType;
