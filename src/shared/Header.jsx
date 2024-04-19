import { useEffect, useRef, useState } from 'react';
import modeIcon from '../assets/icons/mode.png';
import searchIcon from '../assets/icons/search.png';
import lightIcon from '../assets/icons/light.svg';
import darkIcon from '../assets/icons/dark.svg';
import systemIcon from '../assets/icons/systems.svg';

const Header = () => {
  // dark mode light mode implement
  const [mode, setMode] = useState(false);
  const outSideModeRef = useRef(null);

  // when i cick outside of card mode card are invisible
  const handleClickOutside = (event) => {
    if (
      outSideModeRef.current &&
      !outSideModeRef.current.contains(event.target)
    ) {
      setMode(false);
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
           pr-5 w-[400px] rounded-full bg-secondary text-textSecondary"
          type="text"
          placeholder="Search...."
        />
      </div>

      {/* TODO: SHADOW OR ICON FIXED */}
      <div className="flex items-center gap-4">
        {/* mode section */}
        <div className="relative">
          <img
            onClick={() => setMode(!mode)}
            className="cursor-pointer"
            src={modeIcon}
            alt=""
          />
          <div
            className={`${
              mode ? 'grid' : 'hidden'
            } absolute -right-4 top-10 bg-white gap-[2px] border rounded-lg w-[184px] p-2`}
          >
            <div className="flex gap-[10px] items-center hover:bg-secondary hover:text-primary cursor-pointer p-1 rounded-lg">
              <img src={lightIcon} alt="" />
              <h3 className="leading-[18.2px] text-sm">Light</h3>
            </div>
            <div className="flex gap-[10px] items-center hover:bg-secondary hover:text-primary cursor-pointer p-1 rounded-lg">
              <img src={darkIcon} alt="" />
              <h3 className="leading-[18.2px] text-sm">Dark</h3>
            </div>
            <div className="flex gap-[10px] items-center hover:bg-secondary hover:text-primary cursor-pointer p-1 rounded-lg">
              <img src={systemIcon} alt="" />
              <h3 className="leading-[18.2px] text-sm">System</h3>
            </div>
          </div>
        </div>
        <button className="btn_primary_s">Log in</button>
        <button className="btn_primary_a">Get Pro</button>
      </div>
    </div>
  );
};

export default Header;
