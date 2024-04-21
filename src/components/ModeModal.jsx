import React, { useState, useEffect } from 'react';
import lightIcon from '../assets/icons/light.svg';
import darkIcon from '../assets/icons/dark.svg';
import systemIcon from '../assets/icons/systems.svg';

const ModeModal = ({ mode }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Update document class based on darkMode state
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleLightModeClick = () => {
    setDarkMode(false); // Set darkMode to false (light mode)
  };

  const handleDarkModeClick = () => {
    setDarkMode(true); // Set darkMode to true (dark mode)
  };

  return (
    <div
      className={`${
        mode ? 'grid' : 'hidden'
      } absolute -right-4 top-12 gap-[2px] rounded-lg w-[184px] p-2 shadow-shadowMd bg-white`}
    >
      {/* Light Mode Button */}
      <div
        className="flex gap-[10px] items-center hover:bg-bgSecondary hover:text-textPrimary cursor-pointer p-1 rounded-lg"
        onClick={handleLightModeClick}
      >
        <img src={lightIcon} alt="" />
        <h3 className="leading-[18.2px] text-sm">Light</h3>
      </div>

      {/* Dark Mode Button */}
      <div
        className="flex gap-[10px] items-center hover:bg-bgSecondary hover:text-textPrimary cursor-pointer p-1 rounded-lg"
        onClick={handleDarkModeClick}
      >
        <img src={darkIcon} alt="" />
        <h3 className="leading-[18.2px] text-sm">Dark</h3>
      </div>

      {/* System Mode Button (Placeholder) */}
      <div className="flex gap-[10px] items-center hover:bg-bgSecondary hover:text-textPrimary cursor-pointer p-1 rounded-lg">
        <img src={systemIcon} alt="" />
        <h3 className="leading-[18.2px] text-sm">System</h3>
      </div>
    </div>
  );
};

export default ModeModal;
