import { useEffect, useRef, useState } from 'react';
// icons
import searchIcon from '../assets/icons/searchIcon.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ModeModal from '../components/ModeModal';
import UserModal from '../components/UserModal';
import SearchModal from '../components/SearchModal';
import LoginModal from '../components/LoginModal';
import GetProModal from '../components/GetProModal';
import logo from '../assets/icons/logo.svg';
import barIcon from '../assets/icons/bar.svg';
import closeIcon from '../assets/icons/closeIcon.svg';
import logoName from '../assets/logo.svg';
import articlesIcon from '../assets/icons/articleIcon.svg';
import discoverIcon from '../assets/icons/discoverIcon.svg';
import hireIcon from '../assets/icons/hireIcon.svg';
import screensIcon from '../assets/icons/screenIcon.svg';
import sponsoreIcon from '../assets/icons/sponsorIcon.svg';
import uiKitsIcon from '../assets/icons/ui-kitIcon.svg';
import ActiveLink from '../components/ActiveLink';

const Header = () => {
  // dark mode light mode implement
  const [mode, setMode] = useState(false);
  const [user, setUser] = useState(false);
  const [isLoginModal, setLoginModal] = useState(false);
  const [isProModal, setProModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const outSideModeRef = useRef(null);
  const [navState, setNavState] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const outSideModeRefDesktop = useRef(null);
  const outSideModeRefMobile = useRef(null);

  const handleClick = (e) => {
    console.log('clicked', e.target);
    setIsActive(true);
  };

  const handleClose = (e) => {
    console.log('closed', e.target);
    setIsActive(false);
  };

  // when i cick outside of card mode card are invisible
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close mobile modal when clicking outside
      const insideModal = document.getElementById('mobileModal');
      if (insideModal && !insideModal.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // TODO: BUTTONS HOVER SCROLL FUNCTIONALITY PENDING
  const [currentButton, setCurrentButton] = useState(0);
  const buttonsPerClick = 10;

  const buttons = ['All', 'Templates', 'Single Screens', 'Articles'];

  const totalPages = Math.ceil(buttons.length / buttonsPerClick);

  const handleNext = () => {
    setCurrentButton((prevPage) => prevPage + 1);
  };

  const visibleButtons = buttons.slice(
    currentButton * buttonsPerClick,
    currentButton * buttonsPerClick + buttonsPerClick
  );

  // modals
  // Watch for route changes and open modal if on '/login'
  useEffect(() => {
    console.log('Current Path:', location.pathname);
    if (location.pathname === '/login') {
      setLoginModal(true);
    } else {
      setLoginModal(false);
    }
  }, [location.pathname]);

  const openLoginModal = () => {
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
      loginModal.showModal();
    }
  };

  const closeLoginModal = () => {
    // Use Daisy UI modal method to close modal
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
      navigate('/');
      loginModal.close();
    }
  };
  const openProModal = () => {
    // Use Daisy UI modal method to show modal
    const getProModal = document.getElementById('getProModal');
    if (getProModal) {
      getProModal.showModal();
    }
  };

  const closeProModal = () => {
    // Use Daisy UI modal method to close modal
    const getProModal = document.getElementById('getProModal');
    if (getProModal) {
      navigate('/');
      getProModal.close();
    }
  };

  const onNavScroll = () => {
    if (window.scrollY > 100) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);
  }, []);

  return (
    <>
      {/* laptop or desktop devices */}
      <div
        ref={outSideModeRefDesktop}
        className={`${
          navState ? 'bg-white py-3 dark:bg-dark' : 'bg-transparent'
        } hidden md:flex justify-between items-center sticky top-0 z-20 duration-300`}
      >
        <div className="relative">
          <img className="absolute top-1/3 left-5" src={searchIcon} alt="" />
          <input
            onClick={() => document.getElementById('my_modal_3').showModal()}
            className="py-[14px] pl-11
           pr-5 lg:w-[400px] rounded-full bg-bgSecondary text-textPrimary outline-none dark:bg-darkSecondary"
            type="text"
            placeholder="Search...."
          />
          {/* input search filed  modal */}
          <SearchModal
            currentButton={currentButton}
            totalPages={totalPages}
            handleNext={handleNext}
            visibleButtons={visibleButtons}
          />
        </div>

        <div className="flex items-center gap-4">
          {/* mode section laptop or desktop devices */}
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              className="cursor-pointer"
              onClick={() => setMode(!mode)}
            >
              <path
                d="M12 2.5C12.4142 2.5 12.75 2.83579 12.75 3.25V5.68421C12.75 6.09842 12.4142 6.43421 12 6.43421C11.5858 6.43421 11.25 6.09842 11.25 5.68421V3.25C11.25 2.83579 11.5858 2.5 12 2.5ZM4.92868 5.42892C5.22157 5.13602 5.69645 5.13602 5.98934 5.42892L7.35704 6.79662C7.64993 7.08951 7.64993 7.56438 7.35704 7.85728C7.06415 8.15017 6.58927 8.15017 6.29638 7.85728L4.92868 6.48958C4.63579 6.19668 4.63579 5.72181 4.92868 5.42892ZM19.0704 5.42892C19.3633 5.72181 19.3633 6.19668 19.0704 6.48958L17.7027 7.85728C17.4098 8.15017 16.9349 8.15017 16.642 7.85728C16.3491 7.56438 16.3491 7.08951 16.642 6.79662L18.0097 5.42892C18.3026 5.13602 18.7775 5.13602 19.0704 5.42892ZM7.35526 12.5C7.35526 9.93478 9.43478 7.85526 12 7.85526C14.5652 7.85526 16.6447 9.93478 16.6447 12.5C16.6447 15.0652 14.5652 17.1447 12 17.1447C9.43478 17.1447 7.35526 15.0652 7.35526 12.5ZM12 9.35526C10.2632 9.35526 8.85526 10.7632 8.85526 12.5C8.85526 14.2368 10.2632 15.6447 12 15.6447C13.7368 15.6447 15.1447 14.2368 15.1447 12.5C15.1447 10.7632 13.7368 9.35526 12 9.35526ZM2 12.5C2 12.0858 2.33579 11.75 2.75 11.75H5.18421C5.59842 11.75 5.93421 12.0858 5.93421 12.5C5.93421 12.9142 5.59842 13.25 5.18421 13.25H2.75C2.33579 13.25 2 12.9142 2 12.5ZM18.0658 12.5C18.0658 12.0858 18.4016 11.75 18.8158 11.75H21.25C21.6642 11.75 22 12.0858 22 12.5C22 12.9142 21.6642 13.25 21.25 13.25H18.8158C18.4016 13.25 18.0658 12.9142 18.0658 12.5ZM16.6576 17.1571C16.9505 16.8642 17.4254 16.8642 17.7183 17.1571L19.0713 18.5102C19.3642 18.803 19.3642 19.2779 19.0713 19.5708C18.7784 19.8637 18.3035 19.8637 18.0106 19.5708L16.6576 18.2178C16.3647 17.9249 16.3647 17.45 16.6576 17.1571ZM7.34242 17.1574C7.63531 17.4503 7.63531 17.9251 7.34242 18.218L5.98939 19.571C5.6965 19.8639 5.22163 19.8639 4.92873 19.571C4.63584 19.2782 4.63584 18.8033 4.92873 18.5104L6.28176 17.1574C6.57465 16.8645 7.04953 16.8645 7.34242 17.1574ZM12 18.5658C12.4142 18.5658 12.75 18.9016 12.75 19.3158V21.75C12.75 22.1642 12.4142 22.5 12 22.5C11.5858 22.5 11.25 22.1642 11.25 21.75V19.3158C11.25 18.9016 11.5858 18.5658 12 18.5658Z"
                className="fill-dark dark:fill-textSecondary"
              />
            </svg>
            {/* mode modal */}
            <ModeModal mode={mode} />
          </div>
          <Link to="/login" onClick={openLoginModal} className="btn_primary_s">
            Log in
          </Link>
          {/* login modal */}
          <LoginModal isOpen={isLoginModal} onClose={closeLoginModal} />

          <div>
            <button onClick={openProModal} className="btn_primary_a">
              Get Pro
            </button>
            <GetProModal isOpen={isProModal} onClose={closeProModal} />
          </div>
          {/* user sections */}
          <div className="relative">
            <button onClick={() => setUser(!user)} className="btn_primary_s">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M12.5713 4C10.5625 4 8.93406 5.62845 8.93406 7.63724C8.93406 9.64603 10.5625 11.2745 12.5713 11.2745C14.5801 11.2745 16.2085 9.64603 16.2085 7.63724C16.2085 5.62845 14.5801 4 12.5713 4ZM7.43406 7.63724C7.43406 4.80002 9.73408 2.5 12.5713 2.5C15.4085 2.5 17.7085 4.80002 17.7085 7.63724C17.7085 10.4745 15.4085 12.7745 12.5713 12.7745C9.73408 12.7745 7.43406 10.4745 7.43406 7.63724ZM9.7537 14.5461H15.3902C16.4823 14.5461 17.3478 14.5461 18.0454 14.6031C18.7588 14.6614 19.3624 14.783 19.9136 15.0638C20.8074 15.5192 21.534 16.2459 21.9894 17.1397C22.2709 17.692 22.3921 18.3012 22.4502 19.0221C22.5072 19.7283 22.5072 20.6069 22.5072 21.7172V21.75C22.5072 22.1642 22.1714 22.5 21.7572 22.5C21.3429 22.5 21.0072 22.1642 21.0072 21.75C21.0072 20.5996 21.0066 19.7815 20.9551 19.1426C20.9042 18.5116 20.8075 18.1239 20.6529 17.8206C20.3413 17.2091 19.8442 16.7119 19.2326 16.4003C18.9282 16.2452 18.5439 16.1488 17.9233 16.0981C17.2939 16.0467 16.4896 16.0461 15.3572 16.0461H9.78672C8.65424 16.0461 7.84998 16.0467 7.2206 16.0981C6.59997 16.1488 6.21572 16.2452 5.91125 16.4003C5.29972 16.7119 4.80254 17.2091 4.49095 17.8206C4.33643 18.1239 4.23966 18.5116 4.18879 19.1426C4.13729 19.7815 4.13672 20.5996 4.13672 21.75C4.13672 22.1642 3.80093 22.5 3.38672 22.5C2.97251 22.5 2.63672 22.1642 2.63672 21.75V21.7172C2.63671 20.6069 2.63671 19.7283 2.69364 19.0221C2.75176 18.3012 2.87298 17.692 3.15444 17.1397C3.60984 16.2459 4.33649 15.5192 5.23026 15.0638C5.78144 14.783 6.38506 14.6614 7.09845 14.6031C7.79607 14.5461 8.66156 14.5461 9.7537 14.5461Z"
                  className="fill-primary dark:fill-secondary"
                />
              </svg>
            </button>
            {/* user modal */}
            <UserModal user={user} />
          </div>
        </div>
      </div>

      {/* mobile devices */}
      <div className="md:hidden" ref={outSideModeRefMobile}>
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="flex items-center gap-4">
            {/* mode section */}
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                className="cursor-pointer"
                onClick={() => setMode(!mode)}
              >
                <path
                  d="M12 2.5C12.4142 2.5 12.75 2.83579 12.75 3.25V5.68421C12.75 6.09842 12.4142 6.43421 12 6.43421C11.5858 6.43421 11.25 6.09842 11.25 5.68421V3.25C11.25 2.83579 11.5858 2.5 12 2.5ZM4.92868 5.42892C5.22157 5.13602 5.69645 5.13602 5.98934 5.42892L7.35704 6.79662C7.64993 7.08951 7.64993 7.56438 7.35704 7.85728C7.06415 8.15017 6.58927 8.15017 6.29638 7.85728L4.92868 6.48958C4.63579 6.19668 4.63579 5.72181 4.92868 5.42892ZM19.0704 5.42892C19.3633 5.72181 19.3633 6.19668 19.0704 6.48958L17.7027 7.85728C17.4098 8.15017 16.9349 8.15017 16.642 7.85728C16.3491 7.56438 16.3491 7.08951 16.642 6.79662L18.0097 5.42892C18.3026 5.13602 18.7775 5.13602 19.0704 5.42892ZM7.35526 12.5C7.35526 9.93478 9.43478 7.85526 12 7.85526C14.5652 7.85526 16.6447 9.93478 16.6447 12.5C16.6447 15.0652 14.5652 17.1447 12 17.1447C9.43478 17.1447 7.35526 15.0652 7.35526 12.5ZM12 9.35526C10.2632 9.35526 8.85526 10.7632 8.85526 12.5C8.85526 14.2368 10.2632 15.6447 12 15.6447C13.7368 15.6447 15.1447 14.2368 15.1447 12.5C15.1447 10.7632 13.7368 9.35526 12 9.35526ZM2 12.5C2 12.0858 2.33579 11.75 2.75 11.75H5.18421C5.59842 11.75 5.93421 12.0858 5.93421 12.5C5.93421 12.9142 5.59842 13.25 5.18421 13.25H2.75C2.33579 13.25 2 12.9142 2 12.5ZM18.0658 12.5C18.0658 12.0858 18.4016 11.75 18.8158 11.75H21.25C21.6642 11.75 22 12.0858 22 12.5C22 12.9142 21.6642 13.25 21.25 13.25H18.8158C18.4016 13.25 18.0658 12.9142 18.0658 12.5ZM16.6576 17.1571C16.9505 16.8642 17.4254 16.8642 17.7183 17.1571L19.0713 18.5102C19.3642 18.803 19.3642 19.2779 19.0713 19.5708C18.7784 19.8637 18.3035 19.8637 18.0106 19.5708L16.6576 18.2178C16.3647 17.9249 16.3647 17.45 16.6576 17.1571ZM7.34242 17.1574C7.63531 17.4503 7.63531 17.9251 7.34242 18.218L5.98939 19.571C5.6965 19.8639 5.22163 19.8639 4.92873 19.571C4.63584 19.2782 4.63584 18.8033 4.92873 18.5104L6.28176 17.1574C6.57465 16.8645 7.04953 16.8645 7.34242 17.1574ZM12 18.5658C12.4142 18.5658 12.75 18.9016 12.75 19.3158V21.75C12.75 22.1642 12.4142 22.5 12 22.5C11.5858 22.5 11.25 22.1642 11.25 21.75V19.3158C11.25 18.9016 11.5858 18.5658 12 18.5658Z"
                  className="fill-dark dark:fill-textSecondary"
                />
              </svg>
              {/* mode modal */}
              <ModeModal mode={mode} />
            </div>
            <img onClick={handleClick} src={barIcon} alt="" />
          </div>
        </div>
        <input
          // onClick={() => document.getElementById('my_modal_3').showModal()}
          className="py-[14px] pl-11
           pr-5 w-full rounded-full bg-bgSecondary text-textPrimary outline-none dark:bg-darkSecondary mt-4"
          type="text"
          placeholder="Search...."
        />
      </div>

      {/* mobile device slider */}
      <div
        className={`${
          isActive ? 'active grid gap-5' : 'closed'
        } offcanvas w-[250px] p-4 md:hidden h-full fixed z-50 top-0 right-[-250px] transition-all`}
      >
        <div className="flex justify-between">
          <img src={logoName} alt="" />
          <img onClick={handleClose} src={closeIcon} alt="" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Link
              to="/login"
              onClick={openLoginModal}
              className="btn_primary_s"
            >
              Log in
            </Link>
            {/* login modal */}
            <LoginModal isOpen={isLoginModal} onClose={closeLoginModal} />
          </div>
          <div>
            <button onClick={openProModal} className="btn_primary_a">
              Get Pro
            </button>
            <GetProModal isOpen={isProModal} onClose={closeProModal} />
          </div>
        </div>

        {/* links */}
        <div>
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
                  <button className="text-h6 text-nowrap">
                    Become Sponsor
                  </button>
                </div>
              </ActiveLink>
              <ActiveLink to="/hire">
                <div className="flex gap-2 px-4 py-2 items-center">
                  <img src={hireIcon} alt="" />
                  <button className="text-h6 text-nowrap">
                    Hire Flutter Dev
                  </button>
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
      </div>
    </>
  );
};

export default Header;
