import articlesIcon from "../assets/icons/articles.png";
import discoverIcon from "../assets/icons/discover.png";
import hireIcon from "../assets/icons/hire.png";
import screensIcon from "../assets/icons/screens.png";
import sponsoreIcon from "../assets/icons/sponsore.png";
import uiKitsIcon from "../assets/icons/ui-kits.png";
import logo from "../assets/logo.png";

const SideMenu = () => {
  return (
    <div>
      <img className=" px-4 pt-7 pb-8" src={logo} alt="" />
      <div className="grid gap-7">
        <div className="grid gap-2 text-textSecondary">
          <div className="hover:bg-secondary hover:text-primary">
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={discoverIcon} alt="" />
              <p className="text-sm">Discover</p>
            </div>
          </div>
          <div className="hover:bg-secondary hover:text-primary">
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={uiKitsIcon} alt="" />
              <p className="text-sm">UI Kits</p>
            </div>
          </div>
          <div className="hover:bg-secondary hover:text-primary">
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={screensIcon} alt="" />
              <p className="text-sm">Screens</p>
            </div>
          </div>
          <div className="hover:bg-secondary hover:text-primary">
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={articlesIcon} alt="" />
              <p className="text-sm">Articles</p>
            </div>
          </div>
          <div className="hover:bg-secondary hover:text-primary">
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={sponsoreIcon} alt="" />
              <p className="text-sm">Become Sponsor</p>
            </div>
          </div>
          <div className="hover:bg-secondary hover:text-primary">
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={hireIcon} alt="" />
              <p className="text-sm">Hire Flutter Dev</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-sm text-primary pl-4 pb-2">All Screens</h4>
          <div className="grid gap-2 text-textSecondary">
            <div className="hover:bg-secondary hover:text-primary">
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <p className="text-sm">Sing in</p>
                <p>10</p>
              </div>
            </div>
            <div className="hover:bg-secondary hover:text-primary">
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <p className="text-sm">Chat</p>
                <p>10</p>
              </div>
            </div>
            <div className="hover:bg-secondary hover:text-primary">
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <p className="text-sm">Onboarding</p>
                <p>10</p>
              </div>
            </div>
            <div className="hover:bg-secondary hover:text-primary">
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <p className="text-sm">E-commerce</p>
                <p>10</p>
              </div>
            </div>
            <div className="hover:bg-secondary hover:text-primary">
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <p className="text-sm">Checkout</p>
                <p>10</p>
              </div>
            </div>
            <div className="hover:bg-secondary hover:text-primary">
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <p className="text-sm">Error</p>
                <p>10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
