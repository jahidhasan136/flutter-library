import { useEffect, useRef, useState } from 'react';
// icons
import filterIcon from '../assets/icons/filter.png';
import closeIcon from '../assets/icons/closeIcon.svg';
import rightArrowIcon from '../assets/icons/right-arrow.svg';
import modeIcon from '../assets/icons/mode.png';
import searchIcon from '../assets/icons/search.png';
import lightIcon from '../assets/icons/light.svg';
import darkIcon from '../assets/icons/dark.svg';
import systemIcon from '../assets/icons/systems.svg';
import userIcon from '../assets/icons/user.svg';
import getProIcon from '../assets/icons/get-pro.svg';
import collectionsIcon from '../assets/icons/collections.svg';
import Templates from '../pages/Templates';
import Articles from '../pages/Articles';
import Screens from '../pages/Screens';
import { useLocation } from 'react-router-dom';

const Header = () => {
  // dark mode light mode implement
  const [mode, setMode] = useState(false);
  const [user, setUser] = useState(false);
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

  return (
    <div ref={outSideModeRef} className="flex justify-between items-center">
      <div className="relative">
        <img className="absolute top-1/3 left-5" src={searchIcon} alt="" />
        <input
          onClick={() => document.getElementById('my_modal_3').showModal()}
          className="py-[14px] pl-11
           pr-5 w-[400px] rounded-full bg-bgSecondary text-primary outline-none"
          type="text"
          placeholder="Search...."
        />
        {/* input search filed  modal */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box max-w-screen-xl">
            <form
              method="dialog"
              className="flex items-center justify-between mb-5"
            >
              <div className="flex items-center gap-5">
                <div className="relative">
                  <img
                    className="absolute top-1/3 left-5"
                    src={searchIcon}
                    alt=""
                  />
                  <input
                    className="py-[14px] pl-11
           pr-5 w-[400px] rounded-full bg-bgSecondary text-primary outline-none"
                    type="text"
                    placeholder="Search...."
                  />
                </div>

                {/* Filter sections */}
                <div className="flex gap-2 items-center">
                  <button className="flex gap-2 items-center px-4 py-2 bg-bgSecondary rounded-full mr-4">
                    <img src={filterIcon} alt="" />
                    <p className="text-h6 leading-[18.2px]">Filters</p>
                  </button>
                  <div className="border-secondary border-r-2 py-4 mr-4"></div>
                  <div className="button-container flex gap-2 items-center overflow-x-auto">
                    {visibleButtons.map((button, index) => (
                      <button
                        key={index}
                        className="text-h6 px-4 py-2 border border-secondary hover:bg-primary text-primary rounded-full hover:text-white transition-all duration-300"
                        onMouseOver={(e) => e.stopPropagation()} // Prevent scrolling on button hover
                      >
                        {button}
                      </button>
                    ))}
                    {currentButton < totalPages - 1 && (
                      <button onClick={handleNext}>
                        <img src={rightArrowIcon} alt="arrow" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <button>
                <img src={closeIcon} alt="" />
              </button>
            </form>
            <Templates />
            <Articles />
            {/* <Screens /> */}
          </div>
        </dialog>
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
          {/* TODO: MODE MODAL Z-INDEX ISSUE */}
          <div
            className={`${
              mode ? 'grid' : 'hidden'
            } absolute -right-4 top-12 gap-[2px] rounded-lg w-[184px] p-2 shadow-shadowMd`}
          >
            <div className="flex gap-[10px] items-center hover:bg-bgSecondary hover:text-primary cursor-pointer p-1 rounded-lg">
              <img src={lightIcon} alt="" />
              <h3 className="leading-[18.2px] text-sm">Light</h3>
            </div>
            <div className="flex gap-[10px] items-center hover:bg-bgSecondary hover:text-primary cursor-pointer p-1 rounded-lg">
              <img src={darkIcon} alt="" />
              <h3 className="leading-[18.2px] text-sm">Dark</h3>
            </div>
            <div className="flex gap-[10px] items-center hover:bg-bgSecondary hover:text-primary cursor-pointer p-1 rounded-lg">
              <img src={systemIcon} alt="" />
              <h3 className="leading-[18.2px] text-sm">System</h3>
            </div>
          </div>
        </div>
        <button className="btn_primary_s">Log in</button>
        <button className="btn_primary_a">Get Pro</button>
        <div className="relative">
          <button onClick={() => setUser(!user)} className="btn_primary_s">
            <img src={userIcon} alt="" />
          </button>
          {/* user modal */}
          {/* TODO: USER MODAL Z-INDEX ISSUE */}
          <div
            className={`${
              user ? 'grid gap-3' : 'hidden'
            } absolute right-2 top-20 gap-[2px] rounded-lg w-[184px] px-2 py-4 shadow-shadowMd`}
          >
            <div className="grid gap-1">
              <h7 className="text-h7 text-primary  font-medium">
                Abu Anwar MD Abdullah
              </h7>
              <p className="text-h7 text-textSecondary">
                abuanwar072@gmail.com
              </p>
              <div className="border-b border-secondary"></div>
              <div className="grid gap-1">
                <button className="flex gap-2 items-center hover:bg-bgSecondary hover:text-primary p-1 rounded-lg">
                  <img src={getProIcon} alt="" />
                  <h6 className="text-h6 text-primary capitalize">Get Pro</h6>
                </button>
                <button className="flex gap-2 items-center hover:bg-bgSecondary hover:text-primary p-1 rounded-lg">
                  <img src={collectionsIcon} alt="" />
                  <h6 className="text-h6 text-primary capitalize">
                    Collections
                  </h6>
                </button>
                <button className="text-h6 text-primary text-start hover:bg-bgSecondary hover:text-primary p-1 rounded-lg">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
