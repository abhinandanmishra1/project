import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
export const MenuSidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  return (
    <>
      <IoMenu
        className="flex text-3xl text-custom-darker items-center cursor-pointer"
        onClick={toggleMenu}
      />
      <div
        className={`top-0 right-0 w-full md:w-[35vw] lg:w-[20vw] bg-custom-darkblue  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showMenu ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <RxCross2
          className="flex text-3xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={toggleMenu}
        />
        <ul className="flex flex-col gap-[10px]">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};
