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
        <div className="px-4 pb-5 w-full md:w-[85%] xl:md:w-[90%]">
          <Header />
          <div className="pt-6">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
