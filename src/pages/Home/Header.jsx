import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { Select } from "../../blocks";

export const Header = () => {
  const options1 = [
    {
      label: "Chatgpt 4.0",
      value: "chatgpt_4_0",
    },
    {
      label: "Chatgpt 3.0",
      value: "chatgpt_3_0",
    },
  ];

  const options2 = [
    {
      label: "Marketing",
      value: "marketing",
    },
    {
      label: "Sales",
      value: "sales",
    },
    {
      label: "Support",
      value: "support",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="flex items-center w-full p-4 cursor-pointer">
      <div className="h-20 w-14 mr-2" onClick={() => navigate("login")}>
        {/* Need the exact logo image */}
        <img
          src={Logo}
          alt="logo"
          className="bg-transparent mix-blend-exclusion h-full w-full"
        />
      </div>
      <div className="flex items-center justify-between grow p-4 header-bg rounded-full text-white">
        <div className="hidden lg:block font-bold uppercase pl-4">
          <h1>Sudip</h1>
          <h1>Mazumder</h1>
        </div>

        <div className="hidden md:flex items-center">
          <Select
            options={options1}
            onChange={() => {}}
            className="bg-transparent"
            value="home"
            placeholder="Menu"
          />

          <Select
            options={options2}
            onChange={() => {}}
            className="bg-transparent"
            value="home"
            placeholder="Menu"
          />
        </div>

        <h1 className="uppercase font-bold pr-4 text-xl flex justify-center w-full md:w-auto">Alfie</h1>
      </div>
      <div className="w-0 lg:w-24"></div>
    </div>
  );
};
