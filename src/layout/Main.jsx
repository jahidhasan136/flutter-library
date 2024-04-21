import { Outlet } from 'react-router-dom';
import SideMenu from '../pages/home/SideMenu';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const Main = () => {
  return (
    <div className=" dark:bg-dark">
      <div className="md:flex">
        <div className="w-[200px]">
          <SideMenu />
        </div>
        <div className="px-4 pt-4 pb-5 w-full">
          <Header />
          <div className="mt-10">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
