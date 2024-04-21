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
    <div className="drawer drawer-end z-10">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="p-5 w-[539px] min-h-full bg-white grid gap-4 items-center">
          <div className="flex items-center justify-between">
            <h3 className="text-h3">Sign in page</h3>
            <img src={closeIcon} onClick={handleDrawerClose} alt="" />
          </div>
          <div className="flex items-center gap-4">
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
                } absolute mt-4 right-0 z-20 w-[184px] shadow-shadowMd p-2 bg-white rounded-lg`}
              >
                <div className="flex items-center gap-2 hover:bg-bgSecondary hover:text-textPrimary cursor-pointer p-1 rounded-lg">
                  <img src={collectionIcon} alt="" />
                  <p className="text-h6 text-textPrimary">Save</p>
                </div>
                <div className="flex items-center gap-2 hover:bg-bgSecondary hover:text-textPrimary cursor-pointer p-1 rounded-lg">
                  <img src={downloadIcon} alt="" />
                  <p className="text-h6 text-textPrimary">Download code</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center overflow-hidden group rounded-2xl w-[220px] min-w-[160px] max-w-[260px] mx-auto shadow-shadowMd">
            <img className="rounded-2xl" src={screenImgOne} alt="" />
            <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
              <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
                <img src={copyIcon} alt="" />
                <h6 className="text-h6">20</h6>
              </div>
              <div onClick={handleCopyTextChange}>
                {copied ? (
                  <p className="p-2 text-h6 text-textPrimary bg-white rounded-lg">
                    copied!
                  </p>
                ) : (
                  <button
                    onClick={handleCopyText}
                    className="p-2 text-h6 text-textPrimary bg-white rounded-lg"
                  >
                    Copy code
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* tags */}
          <div className="flex  gap-2">
            <h5 className="text-h5">Tags:</h5>
            <div className="flex gap-1">
              <p className="text-textSecondary bg-secondary px-2 py-1 text-h7 rounded-lg">
                Auth
              </p>
              <p className="text-textSecondary bg-secondary px-2 py-1 text-h7 rounded-lg">
                Sign in
              </p>
              <p className="text-textSecondary bg-secondary px-2 py-1 text-h7 rounded-lg">
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
              <h3 className="text-textPrimary text-h5">Shoplo-Shop Template</h3>
              <button className="px-4 py-2 rounded-[20px] border border-secondary">
                View full template
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenDetails;
