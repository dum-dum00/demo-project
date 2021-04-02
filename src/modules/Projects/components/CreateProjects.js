import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProjectServices } from "../Projects.services";
import { genId } from "../../../utils/genId";
import { MultiSelect } from "../../../utils/MultiSelect";
import { LIST_NAME as TECH_STACK_LIST } from "../../TechStack/TechStack.constants";
import { LIST_NAME as STAFF_LIST } from "../../Staffs/Staffs.constants";
import { LIST_NAME as CUSTOMERS_LIST } from "../../Customers/Customers.constants";
import { LIST_NAME as DEPARTMENTS_LIST } from "../../Departments/Departments.constants";
import { LIST_NAME as PROJECT_TYPE_LIST } from "../../ProjectType/ProjectType.constants";
import { LIST_NAME as PROJECT_STATUS_LIST } from "../../ProjectStatus/ProjectStatus.constants";

const CreateStaffs = ({onClose}) => {
  const dispatch = useDispatch();

  const [projectsName, setprojectsName] = useState({ val: "" });
  const [projectsDescription, setprojectsDescription] = useState({ val: "" });
  const [projectsProjectType, setprojectsProjectType] = useState({ val: "" });
  const [projectsProjectStatus, setprojectsProjectStatus] = useState({
    val: "",
  });
  const [projectsCustomers, setprojectsCustomers] = useState({ val: "" });
  const [projectsDepartments, setprojectsDepartments] = useState({ val: "" });
  const [projectsStaffs, setprojectsStaffs] = useState({ val: "" });

  const [projectsTechStack, setprojectsTechStack] = useState({ val: "" });

  const onNameChange = (event) => {
    const { value } = event.target;
    setprojectsName({ val: value });
  };

  const onDescriptionChange = (event) => {
    const { value } = event.target;
    setprojectsDescription({ val: value });
  };

  const onTechStackChange = (data) => {
    setprojectsTechStack({ ...projectsTechStack, val: data });
  };

  const onProjectTypeChange = (data) => {
    setprojectsProjectType({ ...projectsProjectType, val: data });
  };

  const onProjectStatusChange = (data) => {
    setprojectsProjectStatus({ ...projectsProjectStatus, val: data });
  };

  const onCustomersChange = (data) => {
    setprojectsCustomers({ ...projectsCustomers, val: data });
  };

  const onDepartmentsChange = (data) => {
    setprojectsDepartments({ ...projectsDepartments, val: data });
  };

  const onStaffsChange = (data) => {
    setprojectsStaffs({ ...projectsStaffs, val: data });
  };

  const getCurDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    return today;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let data = {
      id: genId(),
      name: projectsName.val,
      description: projectsDescription.val,
      dateCreated: getCurDate(),
      projectTypes: projectsProjectType.val,
      projectStatus: projectsProjectStatus.val,
      customers: projectsCustomers.val,
      techStack: projectsTechStack.val,
      departments: projectsDepartments.val,
      staffs: projectsStaffs.val,
    };

    dispatch(createProjectServices(data));
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setprojectsName({ val: "" });
    setprojectsDescription({ val: "" });
    setprojectsTechStack({ val: "" });
    setprojectsProjectType({ val: "" });
    setprojectsProjectStatus({ val: "" });
    setprojectsCustomers({ val: "" });
    setprojectsDepartments({ val: "" });
    setprojectsStaffs({ val: "" });
  };

  return (
    <div className="self-center">
      <h3 className="font-bold text-white text-xl text-center pb-4 border-b-4 border-white">
        New Projects
      </h3>
      <form onSubmit={onSubmit}>
        <br></br>
        <label className="block mt-2">
          <span className="block font-bold text-white">Name: </span>
          <input
            className="block formInput"
            type="text"
            id="projectssName"
            name="projectssName "
            value={projectsName.val}
            onChange={onNameChange}
          />
        </label>

        <label className="block mt-3">
          <span className="block font-bold text-white">Description:</span>
          <textarea
            className="block formInput"
            type="type"
            id="projectsDescription"
            name="projectsDescription"
            value={projectsDescription.val}
            onChange={onDescriptionChange}
            rows="3"
          ></textarea>
        </label>

        <label className="block mt-2">
          <span className="block font-bold text-white">Tech stack: </span>
          <MultiSelect
            value={projectsTechStack.val}
            callBack={onTechStackChange}
            LIST_NAME={TECH_STACK_LIST}
          />
        </label>

        <label className="block mt-2">
          <span className="block font-bold text-white">Project Type: </span>
          <MultiSelect
            value={projectsProjectType.val}
            callBack={onProjectTypeChange}
            LIST_NAME={PROJECT_TYPE_LIST}
          />
        </label>

        <label className="block mt-2">
          <span className="block font-bold text-white">Project Status: </span>
          <MultiSelect
            value={projectsProjectStatus.val}
            callBack={onProjectStatusChange}
            LIST_NAME={PROJECT_STATUS_LIST}
          />
        </label>

        <label className="block mt-2">
          <span className="block font-bold text-white">Customers: </span>
          <MultiSelect
            value={projectsCustomers.val}
            callBack={onCustomersChange}
            LIST_NAME={CUSTOMERS_LIST}
          />
        </label>

        <label className="block mt-2">
          <span className="block font-bold text-white">Departments: </span>
          <MultiSelect
            value={projectsDepartments.val}
            callBack={onDepartmentsChange}
            LIST_NAME={DEPARTMENTS_LIST}
          />
        </label>

        <label className="block mt-2">
          <span className="block font-bold text-white">Staffs: </span>
          <MultiSelect
            value={projectsStaffs.val}
            callBack={onStaffsChange}
            LIST_NAME={STAFF_LIST}
          />
        </label>

        <div className="flex justify-end space-x-4">
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold rounded-md px-4 py-2 mt-5 ">
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

export default CreateStaffs;
