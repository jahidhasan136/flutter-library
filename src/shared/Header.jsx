import { useEffect, useRef, useState } from 'react';
// icons
import modeIcon from '../assets/icons/themeIcon.svg';
import searchIcon from '../assets/icons/searchIcon.svg';
import userIcon from '../assets/icons/user.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ModeModal from '../components/ModeModal';
import UserModal from '../components/UserModal';
import SearchModal from '../components/SearchModal';
import LoginModal from '../components/LoginModal';
import GetProModal from '../components/GetProModal';
import logo from '../assets/icons/logo.svg';
import barIcon from '../assets/icons/bar.svg';

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

  // when i cick outside of card mode card are invisible
  const handleClickOutside = (event) => {
    if (
      outSideModeRef.current &&
      !outSideModeRef.current.contains(event.target)
    ) {
      setMode(false);
      setUser(false);
    }
  };
  useEffect(() => {
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
        ref={outSideModeRef}
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
          {/* mode section */}
          <div className="relative">
            <img
              onClick={() => setMode(!mode)}
              className="cursor-pointer"
              src={modeIcon}
              alt=""
            />
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
              <img src={userIcon} alt="" />
            </button>
            {/* user modal */}
            <UserModal user={user} />
          </div>
        </div>
      </div>

      {/* mobile devices */}
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <img src={logo} alt="" />
          <div className="flex items-center gap-4">
            <img src={modeIcon} alt="" />
            <img src={barIcon} alt="" />
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
    </>
  );
};

export default Header;
