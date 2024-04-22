import { Link } from 'react-router-dom';
import articlesIcon from '../../assets/icons/articleIcon.svg';
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.97452 1.66666H10.0255C11.2667 1.66666 12.2328 1.66665 13.0102 1.72406C13.7991 1.78233 14.4431 1.90221 15.0299 2.16805C16.2729 2.73126 17.2688 3.72715 17.8319 4.97018C18.0978 5.55689 18.2177 6.20086 18.2759 6.98983C18.3334 7.7672 18.3334 8.73332 18.3334 9.97449V10.0255C18.3334 11.2667 18.3334 12.2327 18.2759 13.0102C18.2177 13.7991 18.0978 14.4431 17.8319 15.0298C17.2688 16.2728 16.2729 17.2687 15.0299 17.8319C14.4431 18.0977 13.7991 18.2177 13.0102 18.2759C12.2328 18.3333 11.2667 18.3333 10.0255 18.3333H9.97452C8.73335 18.3333 7.76723 18.3333 6.98986 18.2759C6.2009 18.2177 5.55691 18.0977 4.97021 17.8319C3.72718 17.2687 2.73129 16.2728 2.16808 15.0298C1.90225 14.4431 1.78236 13.7991 1.7241 13.0102C1.66668 12.2327 1.66669 11.2667 1.66669 10.0255V9.97449C1.66669 8.73332 1.66668 7.76721 1.7241 6.98983C1.78236 6.20086 1.90225 5.55688 2.16808 4.97018C2.73129 3.72715 3.72718 2.73126 4.97021 2.16805C5.55692 1.90221 6.2009 1.78233 6.98986 1.72406C7.76724 1.66665 8.73335 1.66666 9.97452 1.66666ZM7.08193 2.97066C6.36224 3.02382 5.88303 3.12678 5.4861 3.30662C4.5193 3.74468 3.74471 4.51927 3.30666 5.48607C3.14462 5.84368 3.045 6.2681 2.98799 6.87499H9.37502V2.91696C8.41769 2.91836 7.68322 2.92626 7.08193 2.97066ZM10.625 2.91696V6.87499H17.012C16.955 6.2681 16.8554 5.84369 16.6934 5.48607C16.2554 4.51927 15.4808 3.74468 14.5139 3.30663C14.117 3.12678 13.6378 3.02382 12.9181 2.97067C12.3169 2.92626 11.5824 2.91836 10.625 2.91696ZM17.0729 8.12499H10.625V11.875H17.0729C17.0832 11.3463 17.0834 10.7313 17.0834 9.99999C17.0834 9.26866 17.0832 8.65366 17.0729 8.12499ZM17.012 13.125H10.625V17.083C11.5824 17.0817 12.3169 17.0737 12.9181 17.0293C13.6378 16.9762 14.117 16.8732 14.5139 16.6933C15.4808 16.2553 16.2554 15.4807 16.6934 14.5139C16.8554 14.1563 16.955 13.7319 17.012 13.125ZM9.37502 17.083V13.125H2.98799C3.045 13.7319 3.14462 14.1563 3.30665 14.5139C3.74471 15.4807 4.5193 16.2553 5.4861 16.6933C5.88303 16.8732 6.36224 16.9762 7.08193 17.0293C7.68322 17.0737 8.41769 17.0817 9.37502 17.083ZM2.92712 11.875H9.37502V8.12499H2.92712C2.91682 8.65366 2.91669 9.26866 2.91669 9.99999C2.91669 10.7313 2.91682 11.3463 2.92712 11.875Z"
                  className="dark:fill-textSecondary"
                />
              </svg>
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

        {/* all screens link */}
        <div>
          <h4 className="text-h6 text-textPrimary pl-4 pb-2 dark:text-white">
            All Screens
          </h4>
          <div className="grid gap-2 text-textSecondary overflow-y-auto max-h-[400px]">
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
