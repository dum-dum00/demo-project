import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams, useLocation } from 'react-router-dom';

import { editProjectStatusDetailService } from '../ProjectStatus.services';

export const EditProjectStatus = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [pStatusName, setpStatusName] = useState({ val: '' });
  const [pStatusDescription, setpStatusDescription] = useState({ val: '' });

  const [pStatusStatus, setpStatusStatus] = useState({ val: '' });

  useEffect(() => {
    let details = location.state.data;
    if (details) {
      setpStatusName({ val: details.name });
      setpStatusDescription({ val: details.description });
      setpStatusStatus({ val: details.status });
    }
  }, [location.state.data]);

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
  const onReturn = () => {
    history.goBack();
  };

  const onSubmit = event => {
    event.preventDefault();

    let data = {
      id,
      name: pStatusName.val,
      description: pStatusDescription.val,
      status: pStatusStatus.val,
    };

    dispatch(editProjectStatusDetailService(data));
    onReturn();
  };

  return (
    <div className='bg-white flex flex-col mt-10 rounded-xl shadow'>
      <div className=' border-b border-gray-bgTag flex '>
        <button onClick={onReturn} className='border-r-2 border-gray-300 pr-5'>
          <i className='fas fa-arrow-left text-xl text-black hover:text-gray-400 ml-5 '></i>
        </button>
        <span className=' text-xl font-bold p-5  '>Edit Project Status:</span>
      </div>

        <div className='self-center m-5 rounded-xl shadow p-4'>
          <form onSubmit={onSubmit}>
            <label className='block mt-2'>
              <span className='block font-bold text-black'>Name: </span>
              <input
                className='block formInput'
                type='text'
                id='pStatusName'
                name='pStatusName '
                value={pStatusName.val}
                onChange={onNameChange}
              />
            </label>
            <label className='block mt-3'>
              <span className='block font-bold text-black'>Description:</span>
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
                <span className='inline-block  font-bold text-black'>Status:</span>
                <select
                  className='inline-block cursor-pointer formInput'
                  name='Status:'
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

export default EditProjectStatus