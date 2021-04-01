import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { LIST_NAME } from '../Projects.constants';
import { getDetail } from '../../../services/index';
import { getProjectsDetailServices, deleteProjectsServices } from '../Projects.services';
import { Link } from 'react-router-dom';


export const DetailProjects = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const [data, setdata] = useState({});

  // get data
  useEffect(() => {
    let details = getDetail(LIST_NAME, id);
    dispatch(getProjectsDetailServices(details));
    setdata(details);
  }, [ dispatch, id]);

  const onReturn = () => {
    history.goBack();
  };

  const onDelete = () => {
    history.goBack();
    dispatch(deleteProjectsServices(id));
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
  
  

  return (
    <div className='bg-white flex flex-col mt-10 rounded-xl shadow'>
      <div className=' border-b  flex '>
        <button onClick={onReturn} className='border-r-2 border-gray-300 pr-5'>
          <i className='fas fa-arrow-left text-xl text-black hover:text-gray-400 ml-5 '></i>
        </button>
        <span className=' text-xl font-bold p-5  '>Projects:</span>
        <h1 className='py-5 text-xl'> {data.name}</h1>

        <div className='flex flex-row p-3'>
          <Link
            className='btn btn:hover'
            to={{ pathname: `/projects/${id}/edit`, state: { data: data } }}
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
              <label className=' detailPara '>Date Created:</label>
              <span className=' px-2 text-lg'>{data.dateCreated}</span>
            </div>
          </div>
          <div className='w-1/2'>
            <div className=''>
              <label className=' detailPara '>Project Type:</label>
              <span className='inline-block px-2 text-lg'>
                <RenderStack dataList={data.projectTypes}/>
                </span>
            </div>
          </div>
        </div>
      </div>

      <div className='block'>
        <div className='flex p-5 px-8'>
          <div className=' w-1/2'>
            <div className=''>
              <label className=' detailPara '>Project Status:</label>
              <span className='inline-block px-2 text-lg'>
                <RenderStack dataList={data.projectStatus}/>
                </span>
            </div>
          </div>
          <div className=' w-1/2'>
            <div className=''>
              <label className=' detailPara '>Customers:</label>
              <span className='inline-block px-2 text-lg'>
                <RenderStack dataList={data.customers}/>
                </span>
            </div>
          </div>
          <div className='w-1/2'>
            <div className=''>
              <label className=' detailPara '>techStack:</label>
              <span className='inline-block px-2 text-lg'>
                <RenderStack dataList={data.techStack}/>
                </span>
            </div>
          </div>
        </div>
      </div>
    
      <div className='block'>
        <div className='flex p-5 px-8'>
          <div className=' w-1/2'>
            <div className=''>
              <label className=' detailPara '>Departments:</label>
              <span className='inline-block px-2 text-lg'>
                <RenderStack dataList={data.departments}/>
                </span>
            </div>
          </div>
          <div className=' w-1/2'>
            <div className=''>
              <label className=' detailPara '>Staffs:</label>
              <span className='inline-block px-2 text-lg'>
                <RenderStack dataList={data.staffs}/>
                </span>
            </div>
          </div>
          
        </div>
      </div>
    
    </div>
  );
};

export default DetailProjects;


// <div className='flex flex-row p-3'>
//           <Link
//             className='btn btn:hover'
//             to={{ pathname: `/departments/${id}/edit`, state: { data: data } }}
//           >
//             <button name='Edit' className='font-bold py-2'>
//               Edit
//             </button>
//           </Link>
//         </div>

//         <div className='flex flex-row  align-right p-3 justify-end'>
//           <button onClick={onDelete} className='btnAlert btnAlert:hover mx-3 align-right'>
//             <i className='fa fa-trash mr-2' aria-hidden='true'></i>
//             Delete
//           </button>
//         </div>
//       </div>

//       <div className='flex p-5 px-8'>
//         <div className=' w-1/2'>
//           <div className=''>
//             <label className=' detailPara '>Description:</label>
//             <span className=' px-2 text-lg'>{data.description}</span>
//           </div>
//         </div>
//         <div className=' w-1/2'>
//           <div className=''>
//             <label className=' detailPara '>Date Created:</label>
//             <span className=' px-2 text-lg'>{data.dateCreated}</span>
//           </div>
//         </div>
//         <div className='w-1/2'>
//           <div className=''>
//             <label className=' detailPara '>Projects Type:</label>
//             <span className=' px-2 text-lg'>{data.projectTypes}</span>
//           </div>
//         </div>
//         <div className='w-1/2'>
//           <div className=''>
//             <label className=' detailPara '>Projects Status:</label>
//             <span className=' px-2 text-lg'>
//               <RenderStack data={data.techStack} />
//             </span>
//           </div>
//         </div>
//         <div className='w-1/2'>
//           <div className=''>
//             <label className=' detailPara '>Customers:</label>
//             <span className=' px-2 text-lg'>
//               <RenderStack data={data.customers}/></span>
//           </div>
//         </div>
//         <div className='w-1/2'>
//           <div className=''>
//             <label className=' detailPara '>Tech Stack:</label>
//             <span className=' px-2 text-lg'><RenderStack data={(data.techStack)} /></span>
//           </div>
//         </div>
//         <div className='w-1/2'>
//           <div className=''>
//             <label className=' detailPara '>Departments:</label>
//             <span className=' px-2 text-lg'><RenderStack data={(data.departments)} /></span>
//           </div>
//         </div>
//         <div className='w-1/2'>
//           <div className=''>
//             <label className=' detailPara '>Staffs:</label>
//             <span className=' px-2 text-lg'><RenderStack data={(data.staffs)} /></span>
//           </div>
//         </div>
//       </div>
//     </div>