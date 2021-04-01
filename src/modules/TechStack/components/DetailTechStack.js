import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { LIST_NAME } from '../TechStack.constants';
import { getDetail } from '../../../services/index';
import { getTechStackDetailService, deleteTechStackService } from '../TechStack.service';
import { Link } from 'react-router-dom';

export const DetailTechStack = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const [data, setdata] = useState({});

  // get data
  useEffect(() => {
    let details = getDetail(LIST_NAME, id);
    dispatch(getTechStackDetailService(details));
    setdata(details);
  }, [dispatch, id]);

  const onReturn = () => {
    history.goBack();
  };

  const onDelete = () => {
    history.goBack();
    dispatch(deleteTechStackService(id));
  };



  return (
    <div className='bg-white flex flex-col mt-10 rounded-xl shadow'>
      <div className=' border-b  flex '>
        <button onClick={onReturn} className='border-r-2 border-gray-300 pr-5'>
          <i className='fas fa-arrow-left text-xl text-black hover:text-gray-400 ml-5 '></i>
        </button>
        <span className=' text-xl font-bold p-5  '>Tech Stack:</span>
        <h1 className='py-5 text-xl'> {data.name}</h1>

        <div className='flex flex-row p-3'>
          <Link
            className='btn btn:hover'
            to={{ pathname: `/techStack/${id}/edit`, state: { data: data } }}
          >
            <button name='Edit' className='font-bold py-2'>
              Edit
            </button>
          </Link>
        </div>

        <div className='flex flex-row  align-right p-3 justify-end'>
          <button onClick={onDelete} className='btnAlert btnAlert:hover mx-3 align-right'>
            <i className='fa fa-trash mr-2' aria-hidden='true'></i>
            Delete
          </button>
        </div>
      </div>

      <div className='block'>
        <div className='flex p-5 px-8'>
          <div className=' w-1/2'>
            <div className=''>
              <label className=' detailPara '>Description:</label>
              <span className=' px-2 text-lg'>{data.description}</span>
            </div>
          </div>
          <div className=' w-1/2'>
            <div className=''>
              <label className=' detailPara '>Status:</label>
              <span className=' px-2 text-lg'>{data.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTechStack;
