import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { editProjectsDetailServices } from '../Projects.services';
import { MultiSelect } from '../../../utils/MultiSelect';
import { LIST_NAME as TECH_STACK_LIST } from '../../TechStack/TechStack.constants';

import { LIST_NAME as STAFFS_LIST } from '../../Staffs/Staffs.constants';
import { LIST_NAME as CUSTOMERS_LIST } from '../../Customers/Customers.constants';
import { LIST_NAME as DEPARTMENTS_LIST } from '../../Departments/Departments.constants';
import { LIST_NAME as PROJECT_TYPE_LIST } from '../../ProjectType/ProjectType.constants';
import { LIST_NAME as PROJECT_STATUS_LIST } from '../../ProjectStatus/ProjectStatus.constants';

export const EditProjects = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [projectsName, setprojectsName] = useState({ val: '' });
  const [projectsDescription, setprojectsDescription] = useState({ val: '' });
  const [projectsTechStack, setprojectsTechStack] = useState({ val: '' });
  const [projectsStaffs, setprojectsStaffs] = useState({ val: '' });
  const [projectsCustomers, setprojectsCustomers] = useState({ val: '' });
  const [projectsDepartments, setprojectsDepartments] = useState({ val: '' });
  const [projectsProjectType, setprojectsProjectType] = useState({ val: '' });
  const [projectsProjectStatus, setprojectsProjectStatus] = useState({ val: '' });

  useEffect(() => {
    let details = location.state.data;
    if (details) {
      setprojectsName({ val: details.name });
      setprojectsDescription({ val: details.description });
      setprojectsTechStack({ val: details.techStack });
      setprojectsStaffs({ val: details.staffs });
      setprojectsCustomers({ val: details.customers });
      setprojectsDepartments({ val: details.departments });
      setprojectsProjectType({ val: details.projectsTypes });
      setprojectsProjectStatus({ val: details.projectStatus });
    }
  }, [location.state.data]);

  const onNameChange = event => {
    const { value } = event.target;
    setprojectsName({ val: value });
  };

  const onDescriptionChange = event => {
    const { value } = event.target;
    setprojectsDescription({ val: value });
  };

  const onTechStackChange = data => {
    setprojectsTechStack({ ...projectsTechStack, val: data });
  };

  const onStaffsChange = data => {
    setprojectsStaffs({ ...projectsStaffs, val: data });
  };

  const onCustomersChange = data => {
    setprojectsCustomers({ ...projectsCustomers, val: data });
  };

  const onDepartmentsChange = data => {
    setprojectsDepartments({ ...projectsDepartments, val: data });
  };
  const onProjectTypeChange = data => {
    setprojectsProjectType({ ...projectsProjectType, val: data });
  };
  const onProjectStatusChange = data => {
    setprojectsProjectStatus({ ...projectsProjectStatus, val: data });
  };

  const onSubmit = event => {
    event.preventDefault();

    let data = {
      id: id,
      name: projectsName.val,
      description: projectsDescription.val,
      techStack: projectsTechStack.val,
      staffs: projectsStaffs.val,
      projectTypes: projectsProjectType.val,
      projectStatus: projectsProjectStatus.val,
      customers: projectsCustomers.val,
      departments: projectsDepartments.val,
    };

    dispatch(editProjectsDetailServices(data));
    onReturn();
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
        <span className=' text-xl font-bold p-5  '>Edit Projects:</span>
      </div>

      <div className='self-center m-5 rounded-xl shadow p-5 px-10 w-full'>
        <form onSubmit={onSubmit}>
          <label className='block mt-2'>
            <span className='block font-bold text-black'>Name: </span>
            <input
              className='block formInput'
              type='text'
              id='projectssName'
              name='projectssName '
              value={projectsName.val}
              onChange={onNameChange}
            />
          </label>

          <label className='block mt-3'>
            <span className='block font-bold text-black'>Description:</span>
            <textarea
              className='block formInput'
              type='type'
              id='projectsDescription'
              name='projectsDescription'
              value={projectsDescription.val}
              onChange={onDescriptionChange}
              rows='3'
            ></textarea>
          </label>

          <div className='flex-row'>
            <div className='inline-flex space-x-7 w-full mt-3'>
              <div className='flex-1 '>
                <span className=' font-bold text-black'>Tech stack: </span>
                <MultiSelect
                  value={projectsTechStack.val}
                  callBack={onTechStackChange}
                  LIST_NAME={TECH_STACK_LIST}
                />
              </div>
              <div className='flex-1 '>
                <span className=' font-bold text-black'>Staffs: </span>
                <MultiSelect
                  value={projectsStaffs.val}
                  callBack={onStaffsChange}
                  LIST_NAME={STAFFS_LIST}
                />
              </div>

              <div className='flex-1'>
                <span className='block font-bold text-black'>Project Type: </span>
                <MultiSelect
                  value={projectsProjectType.val}
                  callBack={onProjectTypeChange}
                  LIST_NAME={PROJECT_TYPE_LIST}
                />
              </div>
            </div>
          </div>

          <div className='flex-row mt-2'>
            <div className='inline-flex space-x-7 w-full mt-3'>
              <label className='flex-1'>
                <span className='block font-bold text-black'>Project Status: </span>
                <MultiSelect
                  value={projectsProjectStatus.val}
                  callBack={onProjectStatusChange}
                  LIST_NAME={PROJECT_STATUS_LIST}
                />
              </label>

              <label className='flex-1'>
                <span className='block font-bold text-black'>Customers: </span>
                <MultiSelect
                  value={projectsCustomers.val}
                  callBack={onCustomersChange}
                  LIST_NAME={CUSTOMERS_LIST}
                />
              </label>

              <label className='flex-1'>
                <span className='block font-bold text-black'>Departments: </span>
                <MultiSelect
                  value={projectsDepartments.val}
                  callBack={onDepartmentsChange}
                  LIST_NAME={DEPARTMENTS_LIST}
                />
              </label>
            </div>
          </div>

          <div className='flex justify-center'>
            <button className='bg-green-700 hover:bg-green-800 text-white font-bold rounded-md px-4 py-2 mt-5 '>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProjects;
