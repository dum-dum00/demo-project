import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { editDepartmentsDetailService } from '../Departments.services';
import { MultiSelect } from '../../../utils/MultiSelect';
import { LIST_NAME as TECH_STACK_LIST } from '../../TechStack/TechStack.constants';
import { LIST_NAME as STAFFS_LIST } from '../../Staffs/Staffs.constants';
import { LIST_NAME as PROJECT_LIST } from '../../Projects/Projects.constants';

export const EditDepartments = () => {
  const {id} =useParams()

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [departmentsName, setdepartmentsName] = useState({ val: '' });
  const [departmentsDescription, setdepartmentsDescription] = useState({ val: '' });
  const [departmentsTechStack, setdepartmentsTechStack] = useState({ val: '' });
  const [departmentsStaffs, setdepartmentsStaffs] = useState({ val: '' });
  const [departmentsProjects, setdepartmentsProjects] = useState({ val: '' });

  useEffect(() => {
    let details = location.state.data;
    if (details) {
      setdepartmentsName({ val: details.name });
      setdepartmentsDescription({ val: details.description });
      setdepartmentsTechStack({ val: details.techStack });
      setdepartmentsStaffs({ val: details.staffs });
      setdepartmentsProjects({ val: details.projects });
    }
  }, [location.state.data]);

  const onNameChange = event => {
    const { value } = event.target;
    setdepartmentsName({ val: value });
  };

  const onDescriptionChange = event => {
    const { value } = event.target;
    setdepartmentsDescription({ val: value });
  };

  const onTechStackChange = data => {
    setdepartmentsTechStack({ ...departmentsTechStack, val: data });
  };

  const onStaffsChange = data => {
    setdepartmentsStaffs({ ...departmentsStaffs, val: data });
  };

  const onProjectsChange = data => {
    setdepartmentsProjects({ ...departmentsProjects, val: data });
  };

  const onSubmit = event => {
    event.preventDefault();

    let data = {
      id,
      name: departmentsName.val,
      description: departmentsDescription.val,
      techStack: departmentsTechStack.val,
      staffs: departmentsStaffs.val,
      projects: departmentsProjects.val,
    };

    dispatch(editDepartmentsDetailService(data));
  };

  const onReturn = () => {
    history.goBack();
  };

  return (
    <div className='bg-white flex flex-col mt-10 rounded-xl shadow'>
      <div className=' border-b border-gray-bgTag flex '>
        <button onClick={onReturn} className='border-r-2 border-gray-300 pr-5'>
          <i className='fas fa-arrow-left text-xl text-black hover:text-gray-400 ml-5 '></i>
        </button>
        <span className=' text-xl font-bold p-5  '>Edit Departments:</span>
      </div>

      <div className='self-center m-5 rounded-xl shadow p-5 px-10 w-full'>
        <form onSubmit={onSubmit}>
          <label className='block mt-2'>
            <span className='block font-bold text-black'>Name: </span>
            <input
              className='block formInput'
              type='text'
              id='departmentssName'
              name='departmentssName '
              value={departmentsName.val}
              onChange={onNameChange}
            />
          </label>

          <label className='block mt-3'>
            <span className='block font-bold text-black'>Description:</span>
            <textarea
              className='block formInput'
              type='type'
              id='departmentsDescription'
              name='departmentsDescription'
              value={departmentsDescription.val}
              onChange={onDescriptionChange}
              rows='3'
            ></textarea>
          </label>

          <div className='inline-flex space-x-7 w-full mt-3'>
            <div className='flex-1 '>
              <span className=' font-bold text-black'>Tech stack: </span>
              <MultiSelect
                value={departmentsTechStack.val}
                callBack={onTechStackChange}
                LIST_NAME={TECH_STACK_LIST}
              />
            </div>
            <div className='flex-1 '>
              <span className=' font-bold text-black'>Staffs: </span>
              <MultiSelect
                value={departmentsStaffs.val}
                callBack={onStaffsChange}
                LIST_NAME={STAFFS_LIST}
              />
            </div>
            <div className='flex-1 '>
              <span className=' font-bold text-black'>Projects: </span>
              <MultiSelect
                value={departmentsProjects.val}
                callBack={onProjectsChange}
                LIST_NAME={PROJECT_LIST}
              />
            </div>
          </div>

          <div className='flex justify-center'>
            <button className='bg-green-500 hover:bg-green-400 text-white font-bold rounded-md px-4 py-2 mt-5 '>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDepartments;
