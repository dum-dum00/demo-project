import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../../services';
import { getProjectTypeListService } from '../ProjectType.services';
import { LIST_NAME, LIMIT_PROJECT_TYPE } from '../ProjectType.constants';
import { Pagination } from '../../../components/Pagination';
import { useHistory, useLocation } from "react-router-dom";
import { PATH_PROJECT_TYPE} from '../../../constants/path'


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

  return (
    <div className='h-full flex  rounded-xl items-center'>
      <div className='p-4 text-center	my-2 flex-1 flex flex-col rounded-xl w-3/4 '>
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
              className='hover:bg-gray-200'
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

      <div className='w-1/4 h-full bg-blue-800 opacity-75 p-5 px-8 rounded-xl'>
        <CreateProjectType />
      </div>
    </div>
  );
};

export default ProjectType;
