import React from "react";
import { MdOutlineArrowUpward } from "react-icons/md";
const BackToTop = () => {
  return (
    <div className="fixed top-[90%] bg-gray-700 left-[45%] dark:bg-gray-500 transition-all duration-500 text-white p-3 text-2xl rounded-full">
      <MdOutlineArrowUpward />
    </div>
  );
};

export default BackToTop;
