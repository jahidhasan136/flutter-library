import { useState } from 'react';
import templateImg from '../../assets/templates/template-1.png';
// icons
import closeIcon from '../../assets/icons/closeIcon.svg';
import copyIcon from '../../assets/icons/copy.svg';
import barIcon from '../../assets/icons/barIcon.svg';
import collectionIcon from '../../assets/icons/collections.svg';
import downloadIcon from '../../assets/icons/download2.svg';
import screenImgOne from '../../assets/screens/screens-1.png';

const ScreenDetails = ({ copied, handleCopyTextChange, handleCopyText }) => {
  const [barModalOpen, setBarModelOpen] = useState(false);
  const handleDrawerClose = () => {
    const drawerCheckbox = document.getElementById('my-drawer-4');
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };
  return (
    <div className="drawer drawer-end z-20">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="p-5 w-full md:w-[539px] min-h-full bg-white dark:bg-dark grid gap-4 items-center">
          <div className="flex items-center justify-between">
            <h3 className="text-h3 dark:text-secondary">Sign in page</h3>
            <img
              className="cursor-pointer"
              src={closeIcon}
              onClick={handleDrawerClose}
              alt=""
            />
          </div>
          <div className="flex items-center gap-0 justify-between md:gap-4 md:justify-normal">
            <button className="btn_primary_a">Copy code</button>
            <button className="btn_primary_s">Copy link</button>
            <div className="relative">
              <img
                onClick={() => setBarModelOpen(!barModalOpen)}
                className="cursor-pointer"
                src={barIcon}
                alt=""
              />
              <div
                className={`${
                  barModalOpen ? 'grid gap-1' : 'hidden'
                } absolute mt-4 right-0 z-20 w-[184px] shadow-shadowMd p-2 bg-white dark:bg-[#1E1E1E] rounded-lg`}
              >
                <div className="flex items-center gap-2 hover:bg-bgSecondary hover:text-textPrimary cursor-pointer p-1 rounded-lg dark:hover:bg-darkSecondary dark:hover:text-secondary">
                  <img src={collectionIcon} alt="" />
                  <p className="text-h6 text-textPrimary  dark:text-secondary">
                    Save
                  </p>
                </div>
                <div className="flex items-center gap-2 hover:bg-bgSecondary hover:text-textPrimary cursor-pointer p-1 rounded-lg dark:hover:bg-darkSecondary dark:hover:text-secondary">
                  <img src={downloadIcon} alt="" />
                  <p className="text-h6 text-textPrimary  dark:text-secondary">
                    Download code
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center rounded-2xl w-[220px] min-w-[160px] max-w-[260px] mx-auto shadow-shadowMd">
            <img className="rounded-2xl" src={screenImgOne} alt="" />
          </div>

          {/* tags */}
          <div className="flex  gap-2">
            <h5 className="text-h5 dark:text-secondary">Tags:</h5>
            <div className="flex gap-1">
              <p className="text-textSecondary bg-secondary px-2 py-1 text-h7 rounded-lg hover:text-textPrimary duration-300 dark:bg-darkSecondary dark:hover:text-secondary">
                Auth
              </p>
              <p className="text-textSecondary bg-secondary px-2 py-1 text-h7 rounded-lg hover:text-textPrimary duration-300 dark:bg-darkSecondary dark:hover:text-secondary">
                Sign in
              </p>
              <p className="text-textSecondary bg-secondary px-2 py-1 text-h7 rounded-lg hover:text-textPrimary duration-300 dark:bg-darkSecondary dark:hover:text-secondary">
                Register
              </p>
            </div>
          </div>
          <div className="flex gap-4 border border-secondary p-2 rounded-lg">
            <img className="w-[170px] rounded-lg" src={templateImg} alt="" />
            <div className="grid gap-2">
              <p className="text-textSecondary text-h7">
                This screen is part of
              </p>
              <h3 className="text-textPrimary text-h5 dark:text-secondary">
                Shoplo-Shop Template
              </h3>
              <button className="btn_primary_d">View full template</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenDetails;
