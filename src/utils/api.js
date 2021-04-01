export const editApi = (array = [], data) => {
  return array.map(item => {
    return item.id === data.id ? data : item;
  });
};

export const deleteApi = ( array = [], id) => {
  return array.filter(item => item.id !== id)
}

