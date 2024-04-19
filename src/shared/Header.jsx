import { useEffect, useRef, useState } from 'react';
// icons
import modeIcon from '../assets/icons/mode.png';
import searchIcon from '../assets/icons/search.png';
import lightIcon from '../assets/icons/light.svg';
import darkIcon from '../assets/icons/dark.svg';
import systemIcon from '../assets/icons/systems.svg';
import userIcon from '../assets/icons/user.svg';
import getProIcon from '../assets/icons/get-pro.svg';
import collectionsIcon from '../assets/icons/collections.svg';

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

  return (
    <div ref={outSideModeRef} className="flex justify-between items-center">
      <div className="relative">
        <img className="absolute top-1/3 left-5" src={searchIcon} alt="" />
        <input
          className="py-[14px] pl-11
           pr-5 w-[400px] rounded-full bg-bgSecondary text-textSecondary"
          type="text"
          placeholder="Search...."
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
          <div
            className={`${
              mode ? 'grid' : 'hidden'
            } absolute -right-4 top-10 gap-[2px] rounded-lg w-[184px] p-2 shadow-shadowMd`}
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
