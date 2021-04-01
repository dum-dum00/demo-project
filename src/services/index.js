import { deleteApi, editApi } from "../utils/api";


export const setList = (list, data) =>{
  localStorage.setItem(list, JSON.stringify(data))
}
export const getList = list =>{
  const data = localStorage.getItem(list);
  return JSON.parse(data)
}

export const updateDetail = (list, detail) =>{
  let data = JSON.parse(localStorage.getItem(list));
  data = editApi(data, detail); 
  localStorage.setItem(list, JSON.stringify(data));

}

export const getDetail = (list, id) =>{
  const data = JSON.parse(localStorage.getItem(list));
  return data.find(item => item.id === id)
}

export const deleteWid = (list, id) => {
  let data =JSON.parse(localStorage.getItem(list))
  data = deleteApi(data, id);
  localStorage.setItem(list, JSON.stringify(data))
}




