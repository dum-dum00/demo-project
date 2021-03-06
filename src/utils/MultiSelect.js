import React, { useState, useEffect, useRef } from "react";
import { getList } from "../services";

export const MultiSelect = ({ LIST_NAME, value, callBack }) => {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState({
    selected: [],
    data: [],
  });
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    const tableData = getList(LIST_NAME);
    const data = tableData ? tableData.map(item => ({ name: item.name, id: item.id })) : [];
    if (value) {
      setSelect({ selected: value, data });
    }
    else {
      setSelect({ selected: [], data });
    }
  }, [LIST_NAME, value]);

  const handleShow = () => {
    setShow(!show);
  };

  const isSelected = item => {
    let isExist = false;
    const { selected } = select;
    for (const current of selected) {
      if (item.id === current.id) {
        isExist = true;
        break;
      }
    }
    return isExist;
  };

  const handleSelect = item => {
    if (!isSelected(item)) {
      const newSelected = select.selected.map(value => value);
      newSelected.push(item);
      setSelect({ ...select, selected: newSelected });
      callBack(newSelected);
    }
    else {
      const newSelected = select.selected.filter(value => value.id !== item.id);
      setSelect({ ...select, selected: newSelected });
      callBack(newSelected);
    }
  };

  const handleDelete = (event, current) => {
    event.stopPropagation();
    let newSelected = select.selected.map(item => item);
    newSelected = newSelected.filter(item => current.id !== item.id);
    setSelect({ ...select, selected: newSelected });
    callBack(newSelected);
  };

  const dropDownSelect = data => {
    return data.length ? (
      <ul
        className="cursor-pointer z-10 h-24 w-full max-w-xs overflow-scroll 
        overflow-x-hidden absolute rounded-md bg-white border-2 text-center"
      >
        {data.map((item, index) => (
          <li
            className={`p-2 pl-3 border-b border-gray-300  ${
              isSelected(item) ? " bg-white text-blue-700" : ""
            }`}
            onClick={() => handleSelect(item)}
            key={index}
          >
        
            {item.name}
          </li>
        ))}
      </ul>
    ) : (
      <div className=" z-10 w-full p-3  max-w-xs absolute rounded-md bg-white border-2">
        no data
      </div>
    );
  };

  const { selected, data } = select;

  return (
    <div className="w-full relative cursor-pointer  my-1 " ref={wrapperRef}>
      <div
        className={`border-2 py-0.5 h-11 flex bg-white
          ${show ? "border-2 border-gray-outlineFocus rounded-md " : " border-gray-outline rounded"}
          ${selected.length ? " border-gray-outlineFocus" : ""}`}
        onClick={handleShow}
      >
        <div className="overflow-hidden whitespace-nowrap flex flex-1">
          {selected.length ? (
            selected.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border text-md bg-blue-300 p-2
                  inline-block text-black mx-1  rounded-md"
                >
                  {item.name}
                  <div className="pl-2 inline-block " onClick={event => handleDelete(event, item)}>
                    <i className="fas fa-times"></i>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-md-nl pl-2 p-1.5 text-gray-secondary rounded-md">
              {`Chose ur ${LIST_NAME}`}
            </div>
          )}
        </div>
        <div className="flex items-center px-2">
        </div>
      </div>
      {show ? dropDownSelect(data) : null}
    </div>
  );
};

export default MultiSelect;
