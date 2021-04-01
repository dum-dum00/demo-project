import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { editCustomersDetailService } from '../Customers.services';

export const EditCustomers = () => {
  const {id} =useParams()
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [customersName, setcustomersName] = useState({ val: '' });
  const [customersDescription, setcustomersDescription] = useState({ val: '' });
  const [customersPriority, setcustomersPriority] = useState({ val: '' });
  const [customersStatus, setcustomersStatus] = useState({ val: '' });

  useEffect(() => {
    let details = location.state.data;
    if (details) {
      setcustomersName({ val: details.name });
      setcustomersDescription({ val: details.priority });
      setcustomersPriority({ val: details.description });
      setcustomersStatus({ val: details.status });
    }
  }, [location.state.data]);

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
  const onReturn = () => {
    history.goBack();
  };

  const onSubmit = event => {
    event.preventDefault();

    let data = {
      id,
      name: customersName.val,
      description: customersDescription.val,
      priority: customersPriority.val,
      status: customersStatus.val,
    };

    dispatch(editCustomersDetailService(data));
  };

  return (
    <div className='bg-white flex flex-col mt-10 rounded-xl shadow'>
      <div className=' border-b border-gray-bgTag flex '>
        <button onClick={onReturn} className='border-r-2 border-gray-300 pr-5'>
          <i className='fas fa-arrow-left text-xl text-black hover:text-gray-400 ml-5 '></i>
        </button>
        <span className=' text-xl font-bold p-5  '>Edit Customers:</span>
      </div>

        <div className='self-center m-5 rounded-xl shadow p-4'>
          <form onSubmit={onSubmit}>
            <label className='block mt-2'>
              <span className='block font-bold text-black'>Name: </span>
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
              <span className='block font-bold text-black'>Description:</span>
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
                <span className='inline-block font-bold text-black'>Priority:</span>
                <select
                  className=' inline-block formInput'
                  name='customersDescription'
                  value={customersPriority.val}
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
                  className='inline-block formInput'
                  name='Status:'
                  value={customersStatus.val}
                  onChange={onStatusChange}
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
              <button className='bg-green-700 hover:bg-green-800 text-white font-bold rounded-md px-4 py-2 mt-3'>
                Change
              </button>
            </div>
          </form>
        </div>
    </div>
  );
};
