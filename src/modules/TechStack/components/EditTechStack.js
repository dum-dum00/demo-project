import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { editTechStackDetailService } from '../TechStack.service';

export const EditTechStack = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [techStackName, settechStackName] = useState({ val: '' });
  const [techStackDescription, settechStackDescription] = useState({ val: '' });

  const [techStackStatus, settechStackStatus] = useState({ val: '' });

  useEffect(() => {
    let details = location.state.data;
    if (details) {
      settechStackName({ val: details.name });
      settechStackDescription({ val: details.description });
      settechStackStatus({ val: details.status });
    }
  }, [location.state.data]);

  const onNameChange = event => {
    const { value } = event.target;
    settechStackName({ val: value });
  };

  const onDescriptionChange = event => {
    const { value } = event.target;
    settechStackDescription({ val: value });
  };


  const onStatusChange = event => {
    const { value } = event.target;
    settechStackStatus({ val: value });
  };
  const onReturn = () => {
    history.goBack();
  };

  const onSubmit = event => {
    event.preventDefault();

    let data = {
      id,
      name: techStackName.val,
      description: techStackDescription.val,
      status: techStackStatus.val,
    };

    dispatch(editTechStackDetailService(data));
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
                id='techStackName'
                name='techStackName '
                value={techStackName.val}
                onChange={onNameChange}
              />
            </label>
            <label className='block mt-3'>
              <span className='block font-bold text-black'>Description:</span>
              <textarea
                className='block formInput'
                type='type'
                id='techStackDescription'
                name='techStackDescription'
                value={techStackDescription.val}
                onChange={onDescriptionChange}
                rows='3'
              ></textarea>
            </label>
            <label className='block mt-3'>
           
              <div className='inline-block '>
                <span className='inline-block  font-bold text-black'>Status:</span>
                <select
                  className='inline-block formInput'
                  name='Status:'
                  value={techStackStatus.val}
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

export default EditTechStack