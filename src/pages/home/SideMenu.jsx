import { Link } from "react-router-dom";
import articlesIcon from "../../assets/icons/articles.png";
import discoverIcon from "../../assets/icons/discover.png";
import hireIcon from "../../assets/icons/hire.png";
import screensIcon from "../../assets/icons/screens.png";
import sponsoreIcon from "../../assets/icons/sponsore.png";
import uiKitsIcon from "../../assets/icons/ui-kits.png";
import logo from "../../assets/logo.png";

const SideMenu = () => {
  return (
    <div className="border-r-[1px] border-secondary">
      <img className=" px-4 pt-7 pb-8" src={logo} alt="" />
      <div className="grid gap-7">
        <div className="grid gap-2 text-textSecondary">
          <Link to="/" className="hover:bg-secondary hover:text-primary">
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={discoverIcon} alt="" />
              <button className="text-sm">Discover</button>
            </div>
          </Link>
          <Link to="/" className="hover:bg-secondary hover:text-primary">
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={uiKitsIcon} alt="" />
              <button className="text-sm">UI Kits</button>
            </div>
          </Link>
          <Link to="/" className="hover:bg-secondary hover:text-primary">
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={screensIcon} alt="" />
              <button className="text-sm">Screens</button>
            </div>
          </Link>
          <Link to="/" className="hover:bg-secondary hover:text-primary">
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={articlesIcon} alt="" />
              <button className="text-sm">Articles</button>
            </div>
          </Link>
          <Link to="/" className="hover:bg-secondary hover:text-primary">
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={sponsoreIcon} alt="" />
              <button className="text-sm">Become Sponsor</button>
            </div>
          </Link>
          <Link to="/" className="hover:bg-secondary hover:text-primary">
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={hireIcon} alt="" />
              <button className="text-sm">Hire Flutter Dev</button>
            </div>
          </Link>
        </div>
        <div>
          <h4 className="text-sm text-primary pl-4 pb-2">All Screens</h4>
          <div className="grid gap-2 text-textSecondary">
            <Link to="/" className="hover:bg-secondary hover:text-primary">
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <button className="text-sm">Sing in</button>
                <p>10</p>
              </div>
            </Link>
            <Link to="/" className="hover:bg-secondary hover:text-primary">
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <button className="text-sm">Chat</button>
                <p>5</p>
              </div>
            </Link>
            <Link to="/" className="hover:bg-secondary hover:text-primary">
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <button className="text-sm">Onboarding</button>
                <p>18</p>
              </div>
            </Link>
            <Link to="/" className="hover:bg-secondary hover:text-primary">
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <button className="text-sm">E-commerce</button>
                <p>9</p>
              </div>
            </Link>
            <Link to="/" className="hover:bg-secondary hover:text-primary">
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <button className="text-sm">Checkout</button>
                <p>10</p>
              </div>
            </Link>
            <Link to="/" className="hover:bg-secondary hover:text-primary">
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <button className="text-sm">Error</button>
                <p>16</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
