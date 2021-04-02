import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { editProjectTypeDetailService } from '../ProjectType.services';

export const EditProjectType = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { id } = useParams();

  const [pTypeName, setpTypeName] = useState({ val: '' });
  const [pTypeDescription, setpTypeDescription] = useState({ val: '' });

  const [pTypeStatus, setpTypeStatus] = useState({ val: '' });
  const [pTypePriority, setpTypePriority] = useState({ val: '' });

  useEffect(() => {
    let details = location.state.data;
    if (details) {
      setpTypeName({ val: details.name });
      setpTypeDescription({ val: details.description });
      setpTypeStatus({ val: details.status });
      setpTypePriority({ val: details.priority });
    }
  }, [location.state.data]);

  const onNameChange = event => {
    const { value } = event.target;
    setpTypeName({ val: value });
  };

  const onDescriptionChange = event => {
    const { value } = event.target;
    setpTypeDescription({ val: value });
  };

  const onPriorityChange = event => {
    const { value } = event.target;
    setpTypePriority({ val: value });
  };

  const onStatusChange = event => {
    const { value } = event.target;
    setpTypeStatus({ val: value });
  };
  const onReturn = () => {
    history.goBack();
  };

  const onSubmit = event => {
    event.preventDefault();

    let data = {
      id,
      name: pTypeName.val,
      description: pTypeDescription.val,
      status: pTypeStatus.val,
      priority: pTypePriority.val,
    };

    dispatch(editProjectTypeDetailService(data));
  };

  return (
    <div className='bg-white flex flex-col mt-10 rounded-xl shadow'>
      <div className=' border-b border-gray-bgTag flex '>
        <button onClick={onReturn} className='border-r-2 border-gray-300 pr-5'>
          <i className='fas fa-arrow-left text-xl text-black hover:text-gray-400 ml-5 '></i>
        </button>
        <span className=' text-xl font-bold p-5  '>Edit Project Type:</span>
      </div>

      <div className='self-center m-5 rounded-xl shadow p-4'>
        <form onSubmit={onSubmit}>
          <label className='block mt-2'>
            <span className='block font-bold text-black'>Name: </span>
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
            <span className='block font-bold text-black'>Description:</span>
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
              <span className='inline-block font-bold text-black'>Priority:</span>
              <select
                className=' inline-block cursor-pointer formInput'
                name='pTypeDescription'
                value={pTypePriority.val}
                onChange={onPriorityChange}
              >
                <option value='' hidden>
                  Pick an option...
                </option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>

            <div className='inline-block '>
              <span className='inline-block  font-bold text-black'>Status:</span>
              <select
                className='inline-block cursor-pointer formInput'
                name='Type:'
                value={pTypeStatus.val}
                onChange={onStatusChange}
              >
                <option value='' hidden>
                  Pick an option...
                </option>
                <option value='Active'>Active</option>
                <option value='Inactive'>Inactive</option>
              </select>
            </div>
          </label>

          <div className='flex justify-center'>
            <button className='bg-green-500 hover:bg-green-400 text-white font-bold rounded-md px-4 py-2 mt-5 '>
              Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProjectType;
