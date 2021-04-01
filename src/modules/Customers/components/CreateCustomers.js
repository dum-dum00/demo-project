import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCustomersService } from '../Customers.services';
import { genId } from '../../../utils/genId';

const CreateTechStack = () => {
  const dispatch = useDispatch();

  const [customersName, setcustomersName] = useState({ val: '' });
  const [customersDescription, setcustomersDescription] = useState({ val: '' });
  const [customersPriority, setcustomersPriority] = useState({ val: '' });
  const [customersStatus, setcustomersStatus] = useState({ val: '' });

  const onNameChange = event => {
    const { value } = event.target;
    setcustomersName({ val: value });
  };

  const onDescriptionChange = event => {
    const { value } = event.target;
    setcustomersDescription({ val: value });
  };

  const onPriorityChange = event => {
    const { value } = event.target;
    setcustomersPriority({ val: value });
  };

  const onStatusChange = event => {
    const { value } = event.target;
    setcustomersStatus({ val: value });
  };

  const onSubmit = event => {
    event.preventDefault();

    let data = {
      id: genId(),
      name: customersName.val,
      description: customersDescription.val,
      priority: customersPriority.val,
      status: customersStatus.val,
    };

    dispatch(createCustomersService(data));
    resetForm();
  };

  const resetForm = () => {
    setcustomersName({ val: '' });
    setcustomersDescription({ val: '' });
    setcustomersPriority({ val: '' });
    setcustomersStatus({ val: '' });
  };

  return (
    <div className='self-center'>
      <h3 className='font-bold text-white text-xl text-center'>New Customers</h3>
      <form onSubmit={onSubmit}>
        <br></br>
        <label className='block mt-2'>
          <span className='block font-bold text-white'>Name: </span>
          <input
            className='block formInput'
            type='text'
            id='customersName'
            name='customersName '
            value={customersName.val}
            onChange={onNameChange}
          />
        </label>
        <label className='block mt-3'>
          <span className='block font-bold text-white'>Description:</span>
          <textarea
            className='block formInput'
            type='type'
            id='customersDescription'
            name='customersDescription'
            value={customersDescription.val}
            onChange={onDescriptionChange}
            rows='3'
          ></textarea>
        </label>
        <label className='block mt-3'>
          <div className='inline-block mr-5'>
            <span className='inline-block font-bold text-white'>Priority:</span>
            <select
              className=' inline-block cursor-pointer formInput'
              name='customersPriority'
              onChange={onPriorityChange}
              value={customersPriority.val}
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
          <div className='inline-block'>
            <span className='inline-block  font-bold text-white'>Status:</span>
            <select
              className='inline-block cursor-pointer formInput'
              name='customersStatus'
              onChange={onStatusChange}
              value={customersStatus.val}
            >
              <option value='' hidden>
                Pick an option...
              </option>
              <option value='active'>Active</option>
              <option value='inactive'>Inactive</option>
            </select>
          </div>
        </label>

        <div className='flex justify-center'>
          <button className='bg-green-700 hover:bg-green-800 text-white font-bold rounded-md px-4 py-2 mt-5 '>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTechStack;
