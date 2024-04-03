import { Outlet } from "react-router-dom";
import Header from "../home/Header";
import SideMenu from "../home/SideMenu";

const Main = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[180px]">
          <SideMenu />
        </div>
        <div className="px-4 pt-4 pb-5 w-full">
          <Header />
          <div className="mt-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
