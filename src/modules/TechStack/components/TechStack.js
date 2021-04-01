import React, { useEffect } from 'react';
import CreateTechStack from './CreateTechStack';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../../services';
import { getTechStackListService } from '../TechStack.service';
import { LIST_NAME, LIMIT_TECH_STACK } from '../TechStack.constants';
import { Pagination } from '../../../components/Pagination';
import { useHistory, useLocation } from 'react-router-dom';
import { PATH_TECH_STACK } from '../../../constants/path';

export const TechStack = () => {
  const techStackList = useSelector(state => state.techStack.data);
  const { length, totalPage } = useSelector(state => state.techStack);

  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const page = JSON.parse(new URLSearchParams(location.search).get('page')) || 1;

  useEffect(() => {
    const data = getList(LIST_NAME);
    dispatch(getTechStackListService(data));
  }, [dispatch, length]);


  const splitList = () => {
    return techStackList.slice(LIMIT_TECH_STACK * (page - 1), LIMIT_TECH_STACK * page);
  };
  
  const onClick = item => {
    history.push(`${PATH_TECH_STACK}/${item.id}`);
  };

  return (
    <div className='h-full flex  rounded-xl items-center'>
      <div className='p-4 text-center	my-2  flex-1 flex flex-col rounded-xl w-3/4 '>
        <label>TechStack </label>

        <table className='w-full border-collapse text-lg'>
          <thead className='bg-blue-500'>
            <tr className=' text-white text-xl'>
              <th className='border border-blue-500 '>Namescreen</th>
              <th className='border border-blue-500 '>Description</th>
              <th className='border border-blue-500 '>Status</th>
            </tr>
            <tr></tr>
          </thead>
          <tbody>
              {splitList().map((item, index) => (
                <tr onClick={()=>onClick(item)} key={index} className=' cursor-pointer hover:bg-gray-200'>
                  <td className='border border-blue-500'>{item.name}</td>
                  <td className='border border-blue-500'>{item.description}</td>
                  <td className='border border-blue-500'>{item.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <Pagination
          next={() => {
            history.push(`${PATH_TECH_STACK}?page=${page + 1}`);
          }}
          previous={() => {
            history.push(`${PATH_TECH_STACK}?page=${page - 1}`);
          }}
          page={page}
          totalPage={totalPage}
        />
      </div>
      <div className='w-1/4 h-full bg-blue-800 opacity-75 p-5 px-8 rounded-xl'>
        <CreateTechStack />
      </div>
    </div>
  );
};

export default TechStack;
