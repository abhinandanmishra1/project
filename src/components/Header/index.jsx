import { MenuSidebar } from "./MenuSidebar";


export const Header = () => {
  return <div className="flex justify-between p-12">
    <h1 className="uppercase text-xl">Alfie</h1>
    <div className="flex gap-6 items-center text-xl">
      <h3>Menu</h3>
      <MenuSidebar />
    </div>
  </div>;
};
