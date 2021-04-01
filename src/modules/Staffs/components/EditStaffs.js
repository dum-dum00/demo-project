import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router-dom";

import { editStaffsDetailService } from "../Staffs.services";
import { MultiSelect } from "../../../utils/MultiSelect";
import { LIST_NAME as TECH_STACK_LIST } from "../../TechStack/TechStack.constants";

export const EditStaffs = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [StaffsName, setStaffsName] = useState({ val: "" });
  const [StaffsTechStack, setStaffsTechStack] = useState({ val: "" });
  const [StaffDOB, setStaffDOB] = useState({ val: "" });
  const [StaffEmail, setStaffEmail] = useState({ val: "" });
  const [StaffAdress, setStaffAdress] = useState({ val: "" });
  const [StaffSSN, setStaffSSN] = useState({ val: "" });
  const [StaffNum, setStaffNum] = useState({ val: "" });
  const [StaffPassword, setStaffPassword] = useState({ val: "" });
  const [StaffCertificate, setStaffCertificate] = useState({ val: "" });
  const [StaffLanguage, setStaffLanguage] = useState({ val: "" });
  const [StaffRole, setStaffRole] = useState({ val: "" });

  useEffect(() => {
    let details = location.state.data;
    if (details) {
      setStaffsName({ val: details.name });
      setStaffsTechStack({ val: details.techStack });
      setStaffDOB({ val: details.dob });
      setStaffEmail({ val: details.email });
      setStaffAdress({ val: details.address });
      setStaffSSN({ val: details.ssn });
      setStaffNum({ val: details.phoneNum });
      setStaffPassword({ val: details.password });
      setStaffCertificate({ val: details.certificate });
      setStaffLanguage({ val: details.language });
      setStaffRole({ val: details.role });
    }
  }, [location.state.data]);

  const onNameChange = (event) => {
    const { value } = event.target;
    setStaffsName({ val: value });
  };

  const onTechStackChange = (event) => {
    const { value } = event.target;
    setStaffsTechStack({ ...StaffsTechStack, val: value });
  };
  const onDOBChange = (event) => {
    const { value } = event.target;

    setStaffDOB({ ...StaffDOB, val: value });
  };
  const onEmailChange = (event) => {
    const { value } = event.target;

    setStaffEmail({ ...StaffEmail, val: value });
  };
  const onAdressChange = (event) => {
    const { value } = event.target;

    setStaffAdress({ ...StaffAdress, val: value });
  };

  const onSSNChange = (event) => {
    const { value } = event.target;

    setStaffSSN({ ...StaffsTechStack, val: value });
  };
  const onNumChange = (event) => {
    const { value } = event.target;

    setStaffNum({ ...StaffNum, val: value });
  };

  const onPasswordChange = (event) => {
    const { value } = event.target;

    setStaffPassword({ ...StaffPassword, val: value });
  };
  const onCertificateChange = (event) => {
    const { value } = event.target;

    setStaffCertificate({ ...StaffCertificate, val: value });
  };
  const onLanguageChange = (event) => {
    const { value } = event.target;
    setStaffLanguage({ ...StaffLanguage, val: value });
  };

  const onRoleChange = (event) => {
    const { value } = event.target;
    setStaffRole({ ...StaffRole, val: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let data = {
      id,
      name: StaffsName.val,
      email: StaffEmail.val,
      address: StaffAdress.val,
      ssn: StaffSSN.val,
      phoneNum: StaffNum.val,
      password: StaffPassword.val,
      certificate: StaffCertificate.val,
      language: StaffLanguage.val,
      techStack: StaffsTechStack.val,
      role: StaffRole.val,
      dob: StaffDOB.val,
    };

    dispatch(editStaffsDetailService(data));
    onReturn();
  };

  const onReturn = () => {
    history.goBack();
  };

  return (
    <div className="bg-white flex flex-col mt-10 rounded-xl shadow">
      <div className=" border-b border-gray-bgTag flex ">
        <button onClick={onReturn} className="border-r-2 border-gray-300 pr-5">
          <i className="fas fa-arrow-left text-xl text-black hover:text-gray-400 ml-5 "></i>
        </button>
        <span className=" text-xl font-bold p-5  ">Edit Staffs:</span>
      </div>

      <div className="self-center m-5 rounded-xl shadow p-5 px-10 w-full">
        <form onSubmit={onSubmit}>
          <div className="flex justify-start space-x-20">
            <div className="inline-block">
              <label className="block mt-2">
                <span className="block font-bold text-black">Name: </span>
                <input
                  className="block formInput"
                  type="text"
                  id="StaffssName"
                  name="StaffssName "
                  value={StaffsName.val}
                  onChange={onNameChange}
                />
              </label>
            </div>

            <div className="inline-block">
              <label className="block mt-2">
                <span className="block font-bold text-black">
                  Date of birth:{" "}
                </span>
                <input
                  type="date"
                  name="date"
                  className="block formInput"
                  onChange={onDOBChange}
                  value={StaffDOB.val}
                />
              </label>
            </div>
            <div className="inline-block">
              <label className="block mt-3">
                <span className="block font-bold text-black">Email:</span>
                <input
                  className="block formInput"
                  type="text"
                  id="StaffEmail"
                  name="StaffEmail"
                  value={StaffEmail.val}
                  onChange={onEmailChange}
                ></input>
              </label>
            </div>
          </div>

          <div className="flex justify-start space-x-20">
            <label className="block mt-3">
              <span className="block font-bold text-black">Address:</span>
              <input
                className="block formInput"
                type="text"
                id="StaffAdress"
                name="StaffAdress"
                value={StaffAdress.val}
                onChange={onAdressChange}
              ></input>
            </label>

            <label className="block mt-3">
              <span className="block font-bold text-black">SSN:</span>
              <input
                className="block formInput"
                type="text"
                id="StaffSSN"
                name="StaffSSN"
                value={StaffSSN.val}
                onChange={onSSNChange}
              ></input>
            </label>

            <label className="block mt-3">
              <span className="block font-bold text-black">Phone Number:</span>
              <input
                className="block formInput"
                type="text"
                id="StaffNum"
                name="StaffNum"
                value={StaffNum.val}
                onChange={onNumChange}
              ></input>
            </label>
          </div>

          <div className="flex justify-start space-x-20">
            <label className="block mt-3">
              <span className="block font-bold text-black">Password:</span>
              <input
                className="block formInput"
                type="password"
                id="StaffPassword"
                name="StaffPassword"
                value={StaffPassword.val}
                onChange={onPasswordChange}
              ></input>
            </label>

            <label className="block mt-3">
              <span className="block font-bold text-black">Certificate:</span>
              <input
                className="block formInput"
                type="text"
                id="StaffCertificate"
                name="StaffCertificate"
                value={StaffCertificate.val}
                onChange={onCertificateChange}
              ></input>
            </label>

            <label className="block mt-3">
              <span className="block font-bold text-black">Language:</span>
              <input
                className="block formInput"
                type="text"
                id="StaffLanguage"
                name="StaffLanguage"
                value={StaffLanguage.val}
                onChange={onLanguageChange}
              ></input>
            </label>
          </div>

          <div className='flex justify-start space-x-20'>

          <label className="block mt-3">
            <div className="inline-block ">
              <span className="inline-block  font-bold text-black">Role:</span>
              <select
                className="inline-block cursor-pointer formInput"
                name="StaffRole"
                value={StaffRole.val}
                onChange={onRoleChange}
              >
                <option value="" hidden>
                  Pick an option...
                </option>
                <option value="staff">staff</option>
                <option value="monitor">monitor</option>
              </select>
            </div>
          </label>

          <div className="inline-flex space-x-7 w-1/6 mt-3">
            <div className="flex-1 ">
              <span className=" font-bold text-black">Tech stack: </span>
              <MultiSelect
                value={StaffsTechStack.val}
                callBack={onTechStackChange}
                LIST_NAME={TECH_STACK_LIST}
              />
            </div>
          </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-green-700 hover:bg-green-800 text-white font-bold rounded-md px-4 py-2 mt-5 ">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStaffs;
