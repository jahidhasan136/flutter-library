import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideMenu from "./SideMenu";

const Home = () => {
  return (
    <>
      <div className="flex  justify-between">
        <div className="w-[180px]">
          <SideMenu />
        </div>
        <div>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
