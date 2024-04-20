import { Link } from 'react-router-dom';
import articlesIcon from '../../assets/icons/articles.png';
import discoverIcon from '../../assets/icons/discover.png';
import hireIcon from '../../assets/icons/hire.png';
import screensIcon from '../../assets/icons/screens.png';
import sponsoreIcon from '../../assets/icons/sponsore.png';
import uiKitsIcon from '../../assets/icons/ui-kits.png';
import logo from '../../assets/logo.svg';
import ActiveLink from '../../components/ActiveLink';

const SideMenu = () => {
  return (
    <div className="border-r-[1px] border-secondary">
      <Link to="/">
        <img className="px-4 pt-7 pb-8" src={logo} alt="" />
      </Link>
      <div className="grid gap-7">
        <div className="grid gap-2 text-textSecondary">
          <ActiveLink
            to="/discover"
            className="hover:bg-bgSecondary hover:text-textPrimary"
          >
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={discoverIcon} alt="" />
              <button className="text-h6">Discover</button>
            </div>
          </ActiveLink>
          <ActiveLink
            to="/ui-kits"
            className="hover:bg-bgSecondary hover:text-textPrimary"
          >
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={uiKitsIcon} alt="" />
              <button className="text-h6">UI Kits</button>
            </div>
          </ActiveLink>
          <ActiveLink
            to="/templates"
            className="hover:bg-bgSecondary hover:text-textPrimary"
          >
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={screensIcon} alt="" />
              <button className="text-h6">Templates</button>
            </div>
          </ActiveLink>
          <ActiveLink
            to="/screens"
            className="hover:bg-bgSecondary hover:text-textPrimary"
          >
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={screensIcon} alt="" />
              <button className="text-h6">Screens</button>
            </div>
          </ActiveLink>
          <ActiveLink
            to="/articles"
            className="hover:bg-bgSecondary hover:text-textPrimary"
          >
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={articlesIcon} alt="" />
              <button className="text-h6">Articles</button>
            </div>
          </ActiveLink>
          <ActiveLink
            to="/sponsor"
            className="hover:bg-bgSecondary hover:text-textPrimary"
          >
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={sponsoreIcon} alt="" />
              <button className="text-h6">Become Sponsor</button>
            </div>
          </ActiveLink>
          <ActiveLink
            to="/hire"
            className="hover:bg-bgSecondary hover:text-textPrimary"
          >
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={hireIcon} alt="" />
              <button className="text-h6">Hire Flutter Dev</button>
            </div>
          </ActiveLink>
        </div>

        {/* TODO; ALL SCREENS SET TO SCROLL */}
        <div>
          <h4 className="text-h6 text-textPrimary pl-4 pb-2">All Screens</h4>
          <div className="grid gap-2 text-textSecondary">
            <ActiveLink
              to="/sign-in"
              className="hover:bg-bgSecondary hover:text-textPrimary"
            >
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <button className="text-h6">Sign in</button>
                <h3 className="text-h6">10</h3>
              </div>
            </ActiveLink>
            <ActiveLink
              to="/chat"
              className="hover:bg-bgSecondary hover:text-textPrimary"
            >
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <button className="text-h6">Chat</button>
                <h3 className="text-h6">5</h3>
              </div>
            </ActiveLink>
            <ActiveLink
              to="/onboarding"
              className="hover:bg-bgSecondary hover:text-textPrimary"
            >
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <button className="text-h6">Onboarding</button>
                <h3 className="text-h6">18</h3>
              </div>
            </ActiveLink>
            <ActiveLink
              to="/e-commerce"
              className="hover:bg-bgSecondary hover:text-textPrimary"
            >
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <button className="text-h6">E-commerce</button>
                <h3 className="text-h6">9</h3>
              </div>
            </ActiveLink>
            <ActiveLink
              to="/checkout"
              className="hover:bg-bgSecondary hover:text-textPrimary"
            >
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <button className="text-h6">Checkout</button>
                <h3 className="text-h6">10</h3>
              </div>
            </ActiveLink>
            <ActiveLink
              to="/error"
              className="hover:bg-bgSecondary hover:text-textPrimary"
            >
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <button className="text-h6">Error</button>
                <h3 className="text-h6">16</h3>
              </div>
            </ActiveLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
