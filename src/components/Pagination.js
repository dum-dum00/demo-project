import React from "react";

export const Pagination=({ next, previous, page, totalPage })=> {
  return (
    <div className="flex p-2 justify-end">
      {page > 1 ? (
        <div
          className={`text-xl rounded-full h-9 w-9 cursor-pointer
           justify-center flex items-center text-blue-300 m-1 hover:text-blue-800`}
          onClick={previous}
        >
          <i className="fas fa-arrow-left"></i>
        </div>
      ) : null}
      <div className=" items-center flex text-lg p-1"> {page} / {totalPage}</div>
      {page < totalPage && totalPage > 1 ? (
        <div
          className={`text-xl rounded-full h-9 w-9 cursor-pointer
         justify-center flex items-center text-blue-300 m-1 hover:text-blue-800 `}
          onClick={next}
        >
          <i className="fas fa-arrow-right"></i>
        </div>
      ) : null}
    </div>
  );
}
