import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { LIST_NAME } from '../Departments.constants';
import { getDetail } from '../../../services/index';
import { getDepartmentsDetailService, deleteDepartmentsService } from '../Departments.services';
import { Link } from 'react-router-dom';
import  DeleteModal from '../../../utils/DeleteModal'

export const DetailDepartments = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const [data, setdata] = useState({});

  // get data
  useEffect(() => {
    let details = getDetail(LIST_NAME, id);
    dispatch(getDepartmentsDetailService(details));
    setdata(details);
  }, [dispatch, id]);

  const onReturn = () => {
    history.goBack();
  };

  const onDelete = () => {
    history.goBack();
    dispatch(deleteDepartmentsService(id));
  };

  const RenderStack =({ dataList }) => {
    return dataList
      ? dataList.map(item => (
        <div className='inline-block mr-3' key={item.id}>
           {item.name},
        </div>
      ))
      : null;
  }
  const [isOpen, setIsOpen] = useState(false)
  const toogleModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='bg-white flex flex-col mt-10 rounded-xl shadow'>
      <div className=' border-b border-gray-bgTag flex '>
        <button onClick={onReturn} className='border-r-2 border-gray-300 pr-5'>
          <i className='fas fa-arrow-left text-xl text-black hover:text-gray-400 ml-5 '></i>
        </button>
        <span className=' text-xl font-bold p-5  '>Departments:</span>
        <h1 className='py-5 text-xl'> {data.name}</h1>

        <div className='flex flex-row p-3'>
          <Link className='btn btn:hover' to={{ pathname: `/departments/${id}/edit`, state: { data: data } }}>
            <button name='Edit' className='font-bold py-2'>
              Edit
            </button>
          </Link>
        </div>

        <div className='flex flex-row  align-right p-3 justify-end'>
          <button onClick={toogleModal} className='btnAlert btnAlert:hover mx-3 align-right'>
            <i className='fa fa-trash mr-2' aria-hidden='true'></i>
            Delete
          </button>
        </div>
      </div>
      {isOpen ? (
        <DeleteModal onClose={toogleModal} onDelete={onDelete}> 
          Fancy Modal
        </DeleteModal>
        ): null}
      <div className='flex p-5 px-8'>
        <div className=' w-1/2'>
          <div className=''>
            <label className=' detailPara '>Description:</label>
            <span className=' px-2 text-lg'>{data.description}</span>
          </div>
        </div>
        <div className='w-1/2'>
            <div className=''>
              <label className=' detailPara '>Tech Stack:</label>
              <span className='inline-block px-2 text-lg'>
                <RenderStack dataList={data.techStack}/>
                </span>
            </div>
          </div>
          <div className='w-1/2'>
            <div className=''>
              <label className=' detailPara '>Staffs:</label>
              <span className='inline-block px-2 text-lg'>
                <RenderStack dataList={data.staffs}/>
                </span>
            </div>
          </div>
          <div className='w-1/2'>
            <div className=''>
              <label className=' detailPara '>Projects:</label>
              <span className='inline-block px-2 text-lg'>
                <RenderStack dataList={data.projects}/>
                </span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default DetailDepartments;
