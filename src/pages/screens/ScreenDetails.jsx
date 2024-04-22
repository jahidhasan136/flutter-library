import { useState } from 'react';
import templateImg from '../../assets/templates/template-1.png';
// icons
import closeIcon from '../../assets/icons/closeIcon.svg';
import copyIcon from '../../assets/icons/copy.svg';
import barIcon from '../../assets/icons/barIcon.svg';
import collectionIcon from '../../assets/icons/collections.svg';
import downloadIcon from '../../assets/icons/download2.svg';
import screenImgOne from '../../assets/screens/screens-1.png';

const ScreenDetails = () => {
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                className="cursor-pointer"
                onClick={() => setBarModelOpen(!barModalOpen)}
              >
                <path
                  d="M0.5 16C0.5 7.43959 7.43959 0.5 16 0.5H32C40.5604 0.5 47.5 7.43959 47.5 16V32C47.5 40.5604 40.5604 47.5 32 47.5H16C7.43959 47.5 0.5 40.5604 0.5 32V16Z"
                  stroke="#F0F0F0"
                />
                <path
                  d="M14 24C14 22.3086 15.3711 20.9375 17.0625 20.9375C18.7539 20.9375 20.125 22.3086 20.125 24C20.125 25.6914 18.7539 27.0625 17.0625 27.0625C15.3711 27.0625 14 25.6914 14 24ZM17.0625 22.4375C16.1996 22.4375 15.5 23.1371 15.5 24C15.5 24.8629 16.1996 25.5625 17.0625 25.5625C17.9254 25.5625 18.625 24.8629 18.625 24C18.625 23.1371 17.9254 22.4375 17.0625 22.4375ZM20.9375 24C20.9375 22.3086 22.3086 20.9375 24 20.9375C25.6914 20.9375 27.0625 22.3086 27.0625 24C27.0625 25.6914 25.6914 27.0625 24 27.0625C22.3086 27.0625 20.9375 25.6914 20.9375 24ZM24 22.4375C23.1371 22.4375 22.4375 23.1371 22.4375 24C22.4375 24.8629 23.1371 25.5625 24 25.5625C24.8629 25.5625 25.5625 24.8629 25.5625 24C25.5625 23.1371 24.8629 22.4375 24 22.4375ZM27.875 24C27.875 22.3086 29.2461 20.9375 30.9375 20.9375C32.6289 20.9375 34 22.3086 34 24C34 25.6914 32.6289 27.0625 30.9375 27.0625C29.2461 27.0625 27.875 25.6914 27.875 24ZM30.9375 22.4375C30.0746 22.4375 29.375 23.1371 29.375 24C29.375 24.8629 30.0746 25.5625 30.9375 25.5625C31.8004 25.5625 32.5 24.8629 32.5 24C32.5 23.1371 31.8004 22.4375 30.9375 22.4375Z"
                  className="fill-dark dark:fill-secondary"
                />
              </svg>
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
