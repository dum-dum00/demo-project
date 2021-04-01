import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProjectTypeService } from '../ProjectType.services';
import { genId } from '../../../utils/genId';

const CreateProjectType = () => {

  const dispatch = useDispatch();

  const [pTypeName, setpTypeName] = useState({ val: '' });
  const [pTypeDescription, setpTypeDescription] = useState({ val: '' });
  const [pTypePriority, setpTypePriority] = useState({ val: '' });
  const [pTypeStatus, setpTypeStatus] = useState({ val: '' });

  const onNameChange = event => {
    const { value } = event.target;
    setpTypeName({ val: value });
  };

  const onDescriptionChange = event => {
    const { value } = event.target;
    setpTypeDescription({ val: value });
  };

  const onPriorityChange = (event) => {
    const {  value } = event.target;
    setpTypePriority({val: value})
  }
  
  const onStatusChange = (event) => {
    const {value} = event.target;
    setpTypeStatus({val: value})
  }
  

  const onSubmit = event => {
    event.preventDefault();

    let data = {
      id: genId(),
      name: pTypeName.val,
      description: pTypeDescription.val,
      priority: pTypePriority.val,
      status: pTypeStatus.val,
    };

    dispatch(createProjectTypeService(data));
    resetForm();
  };

  const resetForm = () => {
    setpTypeName({ val: '' });
    setpTypeDescription({ val: '' });
    setpTypePriority({ val: '' });
    setpTypeStatus({ val: '' });
  };

  return (
    <div className='self-center'>
      <h3 className='font-bold text-white text-xl text-center'>New Project Type</h3>
      <form onSubmit={onSubmit}>
        <br></br>
        <label className='block mt-2'>
          <span className='block font-bold text-white'>Name: </span>
          <input
            className='block formInput'
            type='text'
            id='pTypeName'
            name='pTypeName '
            value={pTypeName.val}
            onChange={onNameChange}
          />
        </label>
        <label className='block mt-3'>
          <span className='block font-bold text-white'>Description:</span>
          <textarea
            className='block formInput'
            type='type'
            id='pTypeDescription'
            name='pTypeDescription'
            value={pTypeDescription.val}
            onChange={onDescriptionChange}
            rows='3'
          ></textarea>
        </label>
        <label className='block mt-3'>
          <div className='inline-block mr-5'>
            <span className='inline-block font-bold text-white'>Priority:</span>
            <select
              className=' inline-block cursor-pointer formInput'
              name='pTypeDescription'
              value={pTypePriority.val}
              onChange={onPriorityChange}
            >
              <option value='' hidden>Pick an option...</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
          <div className='inline-block '>
            <span className='inline-block  font-bold text-white'>Status:</span>
            <select
              className='inline-block cursor-pointer formInput'
              name='Status:'
              value={pTypeStatus.val}
              onChange={onStatusChange}
            >
              <option value='' hidden>Pick an option...</option>
              <option value='active'>Active</option>
              <option value='inactive'>Inactive</option>
            </select>
          </div>
        </label>

        <div className='flex justify-center'>
          <button className='bg-green-700 hover:bg-green-800 text-white font-bold rounded-md px-4 py-2 mt-3'>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProjectType;
