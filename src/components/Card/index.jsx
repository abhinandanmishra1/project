import React from "react";
import { FaUser } from "react-icons/fa";

export default function Card({ title, description }) {
  return (
    <div className="flex flex-col bg-custom-darkblue rounded-xl text-white hover:shadow-custom w-[350px]">
      <div className="h-[24px] border-b-[3px] border-custom-link"></div>
      <div className="flex flex-col p-4 gap-[10px]">
        <p className="text-[22px] h-32">{description}</p>
        <div className="flex gap-[5px] items-center">
          <FaUser className="text-pink-200" />
          <p className="uppercase text-blue-100 font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
}
