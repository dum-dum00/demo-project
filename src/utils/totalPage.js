export const totalPage = (length, limit) => {
  if (length) {
    let dataLength = length;
    let pageCount = Math.floor(dataLength / limit);
    return dataLength % limit ? pageCount + 1 : pageCount;
  }
  return 1;
};
