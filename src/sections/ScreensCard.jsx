import { useState } from 'react';
// images
import screenImgOne from '../assets/screens/screens-1.png';
// icons
import copyIcon from '../assets/icons/copy.svg';

import ScreenDetails from '../pages/screens/ScreenDetails';

const ScreensCard = () => {
  // card code copy functionality

  const [, setSmShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleCopyText = () => {
    const modalBodyText = 'card codes are copied';
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = modalBodyText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    setSmShow(false);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  const handleCopyTextChange = () => {
    setCopied(true);
  };

  return (
    <>
      <div className="relative overflow-hidden border border-secondary dark:border-darkSecondary group rounded-2xl min-w-[160px] max-w-[260px]">
        <label htmlFor="my-drawer-4">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        </label>
        <div className="absolute bg-screens p-4 h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex flex-shrink-0 items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange} className="w-full">
            {copied ? (
              <p className="p-2 text-h6 text-textPrimary bg-white rounded-lg text-center">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-textPrimary bg-white rounded-lg w-full text-nowrap"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden border border-secondary dark:border-darkSecondary group rounded-2xl min-w-[160px] max-w-[260px]">
        <label htmlFor="my-drawer-4">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        </label>
        <div className="absolute bg-screens p-4 h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex flex-shrink-0 items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange} className="w-full">
            {copied ? (
              <p className="p-2 text-h6 text-textPrimary bg-white rounded-lg text-center">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-textPrimary bg-white rounded-lg w-full text-nowrap"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden border border-secondary dark:border-darkSecondary group rounded-2xl min-w-[160px] max-w-[260px]">
        <label htmlFor="my-drawer-4">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        </label>
        <div className="absolute bg-screens p-4 h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex flex-shrink-0 items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange} className="w-full">
            {copied ? (
              <p className="p-2 text-h6 text-textPrimary bg-white rounded-lg text-center">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-textPrimary bg-white rounded-lg w-full text-nowrap"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden border border-secondary dark:border-darkSecondary group rounded-2xl min-w-[160px] max-w-[260px]">
        <label htmlFor="my-drawer-4">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        </label>
        <div className="absolute bg-screens p-4 h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex flex-shrink-0 items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange} className="w-full">
            {copied ? (
              <p className="p-2 text-h6 text-textPrimary bg-white rounded-lg text-center">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-textPrimary bg-white rounded-lg w-full text-nowrap"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden border border-secondary dark:border-darkSecondary group rounded-2xl min-w-[160px] max-w-[260px]">
        <label htmlFor="my-drawer-4">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        </label>
        <div className="absolute bg-screens p-4 h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex flex-shrink-0 items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange} className="w-full">
            {copied ? (
              <p className="p-2 text-h6 text-textPrimary bg-white rounded-lg text-center">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-textPrimary bg-white rounded-lg w-full text-nowrap"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden border border-secondary dark:border-darkSecondary group rounded-2xl min-w-[160px] max-w-[260px]">
        <label htmlFor="my-drawer-4">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        </label>
        <div className="absolute bg-screens p-4 h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex flex-shrink-0 items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange} className="w-full">
            {copied ? (
              <p className="p-2 text-h6 text-textPrimary bg-white rounded-lg text-center">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-textPrimary bg-white rounded-lg w-full text-nowrap"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden border border-secondary dark:border-darkSecondary group rounded-2xl min-w-[160px] max-w-[260px]">
        <label htmlFor="my-drawer-4">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        </label>
        <div className="absolute bg-screens p-4 h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex flex-shrink-0 items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange} className="w-full">
            {copied ? (
              <p className="p-2 text-h6 text-textPrimary bg-white rounded-lg text-center">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-textPrimary bg-white rounded-lg w-full text-nowrap"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden border border-secondary dark:border-darkSecondary group rounded-2xl min-w-[160px] max-w-[260px]">
        <label htmlFor="my-drawer-4">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        </label>
        <div className="absolute bg-screens p-4 h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex flex-shrink-0 items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange} className="w-full">
            {copied ? (
              <p className="p-2 text-h6 text-textPrimary bg-white rounded-lg text-center">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-textPrimary bg-white rounded-lg w-full text-nowrap"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden border border-secondary dark:border-darkSecondary group rounded-2xl min-w-[160px] max-w-[260px]">
        <label htmlFor="my-drawer-4">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        </label>
        <div className="absolute bg-screens p-4 h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex flex-shrink-0 items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange} className="w-full">
            {copied ? (
              <p className="p-2 text-h6 text-textPrimary bg-white rounded-lg text-center">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-textPrimary bg-white rounded-lg w-full text-nowrap"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden border border-secondary dark:border-darkSecondary group rounded-2xl min-w-[160px] max-w-[260px]">
        <label htmlFor="my-drawer-4">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        </label>
        <div className="absolute bg-screens p-4 h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex flex-shrink-0 items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange} className="w-full">
            {copied ? (
              <p className="p-2 text-h6 text-textPrimary bg-white rounded-lg text-center">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-textPrimary bg-white rounded-lg w-full text-nowrap"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>

      {/* screen details page */}
      <ScreenDetails
        copied={copied}
        handleCopyTextChange={handleCopyTextChange}
        handleCopyText={handleCopyText}
      />
    </>
  );
};

export default ScreensCard;
