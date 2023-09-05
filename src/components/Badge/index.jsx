import React from "react";

export const Badge = ({ name, onClick, active }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white py-2 px-6 rounded-full hover:bg-custom-dark hover:text-white cursor-pointer uppercase ${
        active ? "bg-gray-400" : ""
      }`}
    >
      {name}
    </div>
  );
};
