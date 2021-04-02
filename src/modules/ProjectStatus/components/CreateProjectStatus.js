import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProjectStatusService } from '../ProjectStatus.services';
import { genId } from '../../../utils/genId';

const CreateProjectStatus = ({onClose}) => {
  const dispatch = useDispatch();

  const [pStatusName, setpStatusName] = useState({ val: '' });
  const [pStatusDescription, setpStatusDescription] = useState({ val: '' });
  const [pStatusStatus, setpStatusStatus] = useState({ val: '' });

  const onNameChange = event => {
    const { value } = event.target;
    setpStatusName({ val: value });
  };

  const onDescriptionChange = event => {
    const { value } = event.target;
    setpStatusDescription({ val: value });
  };

  const onStatusChange = event => {
    const { value } = event.target;
    setpStatusStatus({ val: value });
  };

  const onSubmit = event => {
    event.preventDefault();

    let data = {
      id: genId(),
      name: pStatusName.val,
      description: pStatusDescription.val,
      status: pStatusStatus.val,
    };

    dispatch(createProjectStatusService(data));
    resetForm();
    onClose()
  };

  const resetForm = () => {
    setpStatusName({ val: '' });
    setpStatusDescription({ val: '' });
    setpStatusStatus({ val: '' });
  };

  return (
    <div>
      <div className='self-center'>
        <h3 className='font-bold text-white text-xl text-center pb-4 border-b-4 border-white '>New Project Status</h3>
        <form onSubmit={onSubmit}>
          <br></br>
          <label className='block mt-2'>
            <span className='block font-bold text-white'>Name: </span>
            <input
              className='block formInput'
              type='text'
              id='pStatusName'
              name='pStatusName'
              value={pStatusName.val}
              onChange={onNameChange}
            />
          </label>
          <label className='block mt-3'>
            <span className='block font-bold text-white'>Description:</span>
            <textarea
              className='block formInput'
              type='type'
              id='pStatusDescription'
              name='pStatusDescription'
              value={pStatusDescription.val}
              onChange={onDescriptionChange}
              rows='3'
            ></textarea>
          </label>
          <label className='block mt-3'>
            <div className='inline-block '>
              <span className='inline-block  font-bold text-white'>Status:</span>
              <select
                className='inline-block cursor-pointer formInput'
                name='pStatusStatus'
                value={pStatusStatus.val}
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

          <div className='flex justify-end space-x-4'>
            <button className='bg-green-500 hover:bg-green-400 text-white font-bold rounded-md px-4 py-2 mt-5 '>
              Create
            </button>
            <button onClick={onClose} className="bg-gray-400 hover:bg-gray-300 text-white font-bold rounded-md px-4 py-2 mt-5 ">
            Cancel
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectStatus;
