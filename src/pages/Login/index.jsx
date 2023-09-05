import { Input } from "../../blocks";
import { PiUserCircle } from "react-icons/pi";
import { CgLock } from "react-icons/cg";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/")
  };

  return (
    <div className="">
      <Header />
      <form className="flex justify-center mt-20" onSubmit={onSubmit}>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-4">
            <Input
              icon={<PiUserCircle />}
              name="username"
              placeholder="Username"
            />
            <Input
              icon={<CgLock />}
              name="password"
              placeholder="Password"
              type="password"
            />
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="bg-custom-red text-white p-4 rounded-full"
            >
              Login
            </button>
            <p className="text-center cursor-pointer">Need Help?</p>
          </div>
        </div>
      </form>
    </div>
  );
};
