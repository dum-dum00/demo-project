import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTechStackService } from '../TechStack.service';
import { genId } from '../../../utils/genId';

const CreateTechStack = ({onClose}) => {
  const dispatch = useDispatch();

  const [tStackName, settStackName] = useState({ val: '' });
  const [tStackDescription, settStackDescription] = useState({ val: '' });
  const [tStackStatus, settStackStatus] = useState({ val: '' });

  const onNameChange = event => {
    const { value } = event.target;
    settStackName({ val: value });
  };

  const onDescriptionChange = event => {
    const { value } = event.target;
    settStackDescription({ val: value });
  };

  const onStatusChange = event => {
    const { value } = event.target;
    settStackStatus({ val: value });
  };

  const resetForm = () => {
    settStackName({ val: '' });
    settStackDescription({ val: '' });
    settStackStatus({ val: '' });
  };

  const onSubmit = event => {
    event.preventDefault();

    let data = {
      id: genId(),
      name: tStackName.val,
      description: tStackDescription.val,
      status: tStackStatus.val,
    };
    dispatch(createTechStackService(data));
    resetForm();
    onClose();
  };
  return (
    <div>
      <div className='self-center'>
        <h3 className='font-bold text-white text-xl text-center pb-4 border-b-4 border-white '>New Tech Stack</h3>
        <form onSubmit={onSubmit}>
          <br></br>
          <label className='block mt-2'>
            <span className='block font-bold text-white'>Name: </span>
            <input
              className='block formInput'
              type='text'
              id='tStackName'
              name='tStackName'
              value={tStackName.val}
              onChange={onNameChange}
            />
          </label>
          <label className='block mt-3'>
            <span className='block font-bold text-white'>Description: </span>
            <textarea
              className='block formInput'
              type='type'
              id='tStackDescription'
              name='tStackDescription'
              value={tStackDescription.val}
              onChange={onDescriptionChange}
              rows='3'
            ></textarea>
          </label>
          <label className='block mt-3'>
            <div className='inline-block '>
              <span className='inline-block  font-bold text-white'>Status: </span>
              <select
                className='inline-block cursor-pointer formInput '
                name='tStackstatus'
                value={tStackStatus.val}
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

export default CreateTechStack;
