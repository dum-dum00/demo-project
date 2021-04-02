import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createDepartmentsService } from "../Departments.services";
import { genId } from "../../../utils/genId";
import { MultiSelect } from "../../../utils/MultiSelect";
import { LIST_NAME as TECH_STACK_LIST } from "../../TechStack/TechStack.constants";
import { LIST_NAME as STAFFS_LIST } from "../../Staffs/Staffs.constants";
import { LIST_NAME as PROJECT_LIST } from "../../Projects/Projects.constants";

const CreateDepartments = ({onClose}) => {
  const dispatch = useDispatch();

  const [departmentsName, setdepartmentsName] = useState({ val: "" });
  const [departmentsDescription, setdepartmentsDescription] = useState({
    val: "",
  });
  const [departmentsTechStack, setdepartmentsTechStack] = useState({ val: "" });
  const [departmentsStaffs, setdepartmentsStaffs] = useState({ val: "" });
  const [departmentsProjects, setdepartmentsProjects] = useState({ val: "" });

  const onNameChange = (event) => {
    const { value } = event.target;
    setdepartmentsName({ val: value });
  };

  const onDescriptionChange = (event) => {
    const { value } = event.target;
    setdepartmentsDescription({ val: value });
  };

  const onTechStackChange = (data) => {
    setdepartmentsTechStack({ ...departmentsTechStack, val: data });
  };

  const onStaffsChange = (data) => {
    setdepartmentsStaffs({ ...departmentsStaffs, val: data });
  };

  const onProjectsChange = (data) => {
    setdepartmentsProjects({ ...departmentsProjects, val: data });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let data = {
      id: genId(),
      name: departmentsName.val,
      description: departmentsDescription.val,
      techStack: departmentsTechStack.val,
      staffs: departmentsStaffs.val,
      projects: departmentsProjects.val,
    };

    dispatch(createDepartmentsService(data));
    resetForm();
    onClose()
  };

  const resetForm = () => {
    setdepartmentsName({ val: "" });
    setdepartmentsDescription({ val: "" });
    setdepartmentsTechStack({ val: "" });
    setdepartmentsStaffs({ val: "" });
    setdepartmentsProjects({ val: "" });
  };

  return (
    <div className="self-center">
      <h3 className="font-bold text-white text-xl text-center pb-4 border-b-4 border-white">
        New Departments
      </h3>
      <form onSubmit={onSubmit}>
        <br></br>
        <label className="block mt-2">
          <span className="block font-bold text-white">Name: </span>
          <input
            className="block formInput"
            type="text"
            id="departmentssName"
            name="departmentssName "
            value={departmentsName.val}
            onChange={onNameChange}
          />
        </label>

        <label className="block mt-3">
          <span className="block font-bold text-white">Description:</span>
          <textarea
            className="block formInput"
            type="type"
            id="departmentsDescription"
            name="departmentsDescription"
            value={departmentsDescription.val}
            onChange={onDescriptionChange}
            rows="3"
          ></textarea>
        </label>

        <label className="block mt-2">
          <span className="block font-bold text-white">Tech stack: </span>
          <MultiSelect
            value={departmentsTechStack.val}
            callBack={onTechStackChange}
            LIST_NAME={TECH_STACK_LIST}
          />
        </label>

        <label className="block mt-2">
          <span className="block font-bold text-white">Staffs: </span>
          <MultiSelect
            value={departmentsStaffs.val}
            callBack={onStaffsChange}
            LIST_NAME={STAFFS_LIST}
          />
        </label>

        <label className="block mt-2">
          <span className="block font-bold text-white">Projects: </span>
          <MultiSelect
            value={departmentsProjects.val}
            callBack={onProjectsChange}
            LIST_NAME={PROJECT_LIST}
          />
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
  );
};

export default CreateDepartments;
