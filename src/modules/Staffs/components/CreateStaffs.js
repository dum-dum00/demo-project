import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createStaffsService } from "../Staffs.services";
import { genId } from "../../../utils/genId";
import { MultiSelect } from "../../../utils/MultiSelect";
import { LIST_NAME as TECH_STACK_LIST } from "../../TechStack/TechStack.constants";

const CreateStaffs = ({ onClose }) => {
  const dispatch = useDispatch();

  const [staffsName, setstaffsName] = useState({ val: "" });
  const [staffsEmail, setstaffsEmail] = useState({ val: "" });
  const [staffsAdress, setstaffsAdress] = useState({ val: "" });
  const [staffsSSN, setstaffsSSN] = useState({ val: "" });
  const [staffsPhoneNum, setstaffsPhoneNum] = useState({ val: "" });
  const [staffsPassword, setstaffsPassword] = useState({ val: "" });
  const [staffsCertificate, setstaffsCertificate] = useState({ val: "" });
  const [staffsLanguage, setstaffsLanguage] = useState({ val: "" });
  const [staffsTechStack, setstaffsTechStack] = useState({ val: "" });
  const [staffsRole, setstaffsRole] = useState({ val: "" });
  const [staffsDOB, setstaffsDOB] = useState({ val: "" });

  const onNameChange = (event) => {
    const { value } = event.target;
    setstaffsName({ val: value });
  };

  const onEmailChange = (event) => {
    const { value } = event.target;
    setstaffsEmail({ val: value });
  };

  const onAdressChange = (event) => {
    const { value } = event.target;
    setstaffsAdress({ val: value });
  };

  const onSSNChange = (event) => {
    const { value } = event.target;
    setstaffsSSN({ val: value });
  };

  const onPhoneNumChange = (event) => {
    const { value } = event.target;
    setstaffsPhoneNum({ val: value });
  };

  const onPasswordChange = (event) => {
    const { value } = event.target;
    setstaffsPassword({ val: value });
  };

  const onCertificateChange = (event) => {
    const { value } = event.target;
    setstaffsCertificate({ val: value });
  };

  const onLanguageChange = (event) => {
    const { value } = event.target;
    setstaffsLanguage({ val: value });
  };

  const onTechStackChange = (data) => {
    setstaffsTechStack({ ...staffsTechStack, val: data });
  };

  const onRoleChange = (event) => {
    const { value } = event.target;
    setstaffsRole({ val: value });
  };

  const onDOBChange = (event) => {
    const { value } = event.target;

    setstaffsDOB({ val: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let data = {
      id: genId(),
      name: staffsName.val,
      email: staffsEmail.val,
      address: staffsAdress.val,
      ssn: staffsSSN.val,
      phoneNum: staffsPhoneNum.val,
      password: staffsPassword.val,
      certificate: staffsCertificate.val,
      language: staffsLanguage.val,
      techStack: staffsTechStack.val,
      role: staffsRole.val,
      dob: staffsDOB.val,
    };

    dispatch(createStaffsService(data));
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setstaffsName({ val: "" });
    setstaffsEmail({ val: "" });
    setstaffsAdress({ val: "" });
    setstaffsSSN({ val: "" });
    setstaffsPhoneNum({ val: "" });
    setstaffsPassword({ val: "" });
    setstaffsCertificate({ val: "" });
    setstaffsLanguage({ val: "" });
    setstaffsTechStack({ val: "" });
    setstaffsRole({ val: "" });
    setstaffsDOB({ val: "" });
  };

  return (
    <div className="self-center">
      <h3 className="font-bold text-white text-xl text-center pb-4 border-b-4 border-white">
        New Staffs
      </h3>
      <form onSubmit={onSubmit}>
        <br></br>
        <div className="inline-flex space-x-7 w-full mt-3">
          <div className="flex-1 ">
            <label className="block mt-2">
              <span className="block font-bold text-white">Name: </span>
              <input
                className="block formInput"
                type="text"
                id="staffssName"
                name="staffssName "
                value={staffsName.val}
                onChange={onNameChange}
              />
            </label>
          </div>
          <div className="flex-1 ">
            <label className="block mt-2">
              <span className="block font-bold text-white">
                Date of birth:{" "}
              </span>
              <input
                type="date"
                name="date"
                className="block formInput"
                onChange={onDOBChange}
                value={staffsDOB.val}
              />
            </label>
          </div>
        </div>

        <div className="inline-flex space-x-7 w-full mt-3">
          <div className="flex-1 ">
            <label className="block mt-2">
              <span className="block font-bold text-white">Email: </span>
              <input
                className="block formInput"
                type="text"
                id="staffsEmail"
                name="staffsEmail"
                value={staffsEmail.val}
                onChange={onEmailChange}
              />
            </label>
          </div>
          <div className="flex-1 ">
            <label className="block mt-2">
              <span className="block font-bold text-white">Adress: </span>
              <input
                className="block formInput"
                type="text"
                id="staffsAdress"
                name="staffsAdress"
                value={staffsAdress.val}
                onChange={onAdressChange}
              />
            </label>
          </div>
        </div>

        <div className="inline-flex space-x-7 w-full mt-3">
          <div className="flex-1 ">
            <label className="block mt-2">
              <span className="block font-bold text-white">SSN: </span>
              <input
                className="block formInput"
                type="text"
                id="staffsSSN"
                name="staffsSSN"
                value={staffsSSN.val}
                onChange={onSSNChange}
              />
            </label>
          </div>
          <div className="flex-1 ">
            <label className="block mt-2">
              <span className="block font-bold text-white">Phone Number: </span>
              <input
                className="block formInput"
                type="text"
                id="staffsPhoneNum"
                name="staffsPhoneNum"
                value={staffsPhoneNum.val}
                onChange={onPhoneNumChange}
              />
            </label>
          </div>
        </div>

        <div className="inline-flex space-x-7 w-full mt-3">
          <div className="flex-1 ">
            <label className="block mt-2">
              <span className="block font-bold text-white">Password: </span>
              <input
                className="block formInput"
                type="text"
                id="staffsPassword"
                name="staffsPassword"
                value={staffsPassword.val}
                onChange={onPasswordChange}
              />
            </label>
          </div>
          <div className="flex-1 ">
            <label className="block mt-2">
              <span className="block font-bold text-white">Certificate: </span>
              <input
                className="block formInput"
                type="text"
                id="staffsCertificate"
                name="staffsCertificate"
                value={staffsCertificate.val}
                onChange={onCertificateChange}
              />
            </label>
          </div>
        </div>

        <div className="inline-flex space-x-7 w-full mt-3">
          <div className="flex-1 ">
            <label className="block mt-2">
              <span className="block font-bold text-white">Language: </span>
              <input
                className="block formInput"
                type="text"
                id="staffsLanguage"
                name="staffsLanguage"
                value={staffsLanguage.val}
                onChange={onLanguageChange}
              />
            </label>
          </div>
          <div className="flex-1 ">
            <label className="block mt-2">
              <span className="block font-bold text-white">Tech stack: </span>
              <MultiSelect
                value={staffsTechStack.val}
                callBack={onTechStackChange}
                LIST_NAME={TECH_STACK_LIST}
              />
            </label>
          </div>
        </div>
        <div className="inline-flex space-x-7 w-full mt-3">
          <div className="flex-1 ">
            <label className="block mt-3">
              <div className="inline-block ">
                <span className="inline-block  font-bold text-white">
                  Role:
                </span>
                <select
                  className="inline-block cursor-pointer formInput"
                  name="staffsRole"
                  value={staffsRole.val}
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
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold rounded-md px-4 py-2 mt-5 ">
            Create
          </button>
          <button
            onClick={onClose}
            className="bg-gray-400 hover:bg-gray-300 text-white font-bold rounded-md px-4 py-2 mt-5 "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateStaffs;
