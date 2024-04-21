import { Link } from 'react-router-dom';
import articlesIcon from '../../assets/icons/articleIcon.svg';
import discoverIcon from '../../assets/icons/discoverIcon.svg';
import hireIcon from '../../assets/icons/hireIcon.svg';
import screensIcon from '../../assets/icons/screenIcon.svg';
import sponsoreIcon from '../../assets/icons/sponsorIcon.svg';
import uiKitsIcon from '../../assets/icons/ui-kitIcon.svg';
import logo from '../../assets/logo.svg';
import ActiveLink from '../../components/ActiveLink';

const SideMenu = () => {
  return (
    <div className="hidden md:grid border-r-[1px] border-secondary dark:border-darkSecondary">
      <Link to="/">
        <img className="px-4 pt-7 pb-8" src={logo} alt="" />
      </Link>
      <div className="grid gap-7">
        <div className="grid gap-2 text-textSecondary">
          <ActiveLink to="/">
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={discoverIcon} alt="" />
              <button className="text-h6">Discover</button>
            </div>
          </ActiveLink>
          <ActiveLink to="/ui-kits">
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={uiKitsIcon} alt="" />
              <button className="text-h6">UI Kits</button>
            </div>
          </ActiveLink>
          <ActiveLink to="/templates">
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={screensIcon} alt="" />
              <button className="text-h6">Templates</button>
            </div>
          </ActiveLink>
          <ActiveLink to="/articles">
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={articlesIcon} alt="" />
              <button className="text-h6">Articles</button>
            </div>
          </ActiveLink>
          <ActiveLink to="/sponsor">
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={sponsoreIcon} alt="" />
              <button className="text-h6 text-nowrap">Become Sponsor</button>
            </div>
          </ActiveLink>
          <ActiveLink to="/hire">
            <div className="flex gap-2 px-4 py-2 items-center">
              <img src={hireIcon} alt="" />
              <button className="text-h6 text-nowrap">Hire Flutter Dev</button>
            </div>
          </ActiveLink>
        </div>

        {/* TODO; ALL SCREENS SET TO SCROLL */}
        <div>
          <h4 className="text-h6 text-textPrimary pl-4 pb-2 dark:text-white">
            All Screens
          </h4>
          <div className="grid gap-2 text-textSecondary">
            <ActiveLink to="/sign-in">
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <button className="text-h6">Sign in</button>
                <h3 className="text-h6">10</h3>
              </div>
            </ActiveLink>
            <ActiveLink to="/chat">
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <button className="text-h6">Chat</button>
                <h3 className="text-h6">5</h3>
              </div>
            </ActiveLink>
            <ActiveLink to="/onboarding">
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <button className="text-h6">Onboarding</button>
                <h3 className="text-h6">18</h3>
              </div>
            </ActiveLink>
            <ActiveLink to="/e-commerce">
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <button className="text-h6">E-commerce</button>
                <h3 className="text-h6">9</h3>
              </div>
            </ActiveLink>
            <ActiveLink to="/checkout">
              <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                <button className="text-h6">Checkout</button>
                <h3 className="text-h6">10</h3>
              </div>
            </ActiveLink>
            <ActiveLink to="/error">
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
