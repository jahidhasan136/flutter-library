import { useEffect, useRef, useState } from 'react';
// icons
import modeIcon from '../assets/icons/mode.png';
import searchIcon from '../assets/icons/search.png';
import userIcon from '../assets/icons/user.svg';
import Screens from '../pages/Screens';
import { useLocation } from 'react-router-dom';
import ModeModal from '../components/ModeModal';
import UserModal from '../components/UserModal';
import SearchModal from '../components/SearchModal';
import LoginModal from '../components/LoginModal';
import SignUpModal from '../components/SignUpModal';

const Header = () => {
  // dark mode light mode implement
  const [mode, setMode] = useState(false);
  const [user, setUser] = useState(false);
  const [isLoginModal, setLoginModal] = useState(false);
  const outSideModeRef = useRef(null);

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
  // home page filter option hide
  // const location = useLocation();
  // const hideFilter = location.pathname === '/';

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
  const openLoginModal = () => {
    setLoginModal(true);
  };
  const closeLoginModal = () => {
    setLoginModal(false);
  };

  return (
    <div ref={outSideModeRef} className="flex justify-between items-center">
      <div className="relative">
        <img className="absolute top-1/3 left-5" src={searchIcon} alt="" />
        <input
          onClick={() => document.getElementById('my_modal_3').showModal()}
          className="py-[14px] pl-11
           pr-5 w-[400px] rounded-full bg-bgSecondary text-textPrimary outline-none"
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
        <button
          onClick={() => document.getElementById('loginModal').showModal()}
          className="btn_primary_s"
        >
          Log in
        </button>
        <LoginModal isOpen={isLoginModal} onClose={closeLoginModal} />

        <button className="btn_primary_a">Get Pro</button>
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
  );
};

export default Header;
