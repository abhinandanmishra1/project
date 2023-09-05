import { cloneElement } from "react";

export const Input = (props) => {
  return (
    <div className="bg-white p-4 rounded-full flex gap-2">
      {props.icon &&
        cloneElement(props.icon, {
          className: "text-3xl text-custom-dark",
        })}
      <input className="border-0 outline-none text-lg text-custom-dark" {...props} />
    </div>
  );
};
