import { useEffect, useRef, useState } from "react";
import { CiDark, CiLight, CiSettings } from "react-icons/ci";
import modeIcon from "../../assets/icons/mode.png";
import searchIcon from "../../assets/icons/search.png";

const Header = () => {
  const [mode, setMode] = useState(false);
  const outSideModeRef = useRef(null)

  const handleClickOutside = (event) => {
    if(outSideModeRef.current && !outSideModeRef.current.contains(event.target)){
      setMode(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  },[])
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
        <div className="relative">
        <img onClick={() => setMode(!mode)} className="cursor-pointer" src={modeIcon} alt="" />
          <div className={`${mode ? 'grid' : 'hidden'} absolute -right-4 top-10 bg-white gap-[2px] border rounded-lg w-[184px]`}>
          <div className="flex gap-[10px] items-center hover:bg-secondary hover:text-primary cursor-pointer p-2">
            <CiLight className="text-2xl" />
            <h3 className="leading-[18.2px] text-sm">Light</h3>
          </div>
          <div className="flex gap-[10px] items-center hover:bg-secondary hover:text-primary cursor-pointer p-2">
            <CiDark className="text-2xl" />
            <h3 className="leading-[18.2px] text-sm">Dark</h3>
          </div>
          <div className="flex gap-[10px] items-center hover:bg-secondary hover:text-primary cursor-pointer p-2">
            <CiSettings className="text-2xl" />
            <h3 className="leading-[18.2px] text-sm">System</h3>
          </div>
        </div>
        </div>
        <button className="px-4 py-[14px] border border-secondary rounded-2xl font-semibold text-primary">
          Log in
        </button>
        <button className="px-4 py-[14px] rounded-2xl font-semibold bg-primary text-white">
          Get Pro
        </button>
      </div>
    </div>
  );
};

export default Header;
