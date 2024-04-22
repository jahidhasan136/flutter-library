import { useState } from 'react';
import templateImgOne from '../../assets/screens/screens-1.png';
import overviewImg from '../../assets/templates/overview.png';
// icons
import copyIcon from '../../assets/icons/copy.svg';
import revenueIcon from '../../assets/icons/revenueIcon.svg';
import downloadIcon from '../../assets/icons/downloadIcon.svg';
import phoneIcon from '../../assets/icons/phoneIcon.svg';
// images
import templateOne from '../../assets/templates/template-1.png';
import templateTwo from '../../assets/templates/template-2.png';
import templateThree from '../../assets/templates/template-3.png';
import { Link } from 'react-router-dom';

const TemplateDetails = () => {
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
    <div className="grid gap-10">
      <div className="grid gap-5">
        <div className="flex items-center">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12.5987 4.5296C12.8586 4.75687 12.8849 5.15172 12.6577 5.41152L8.64374 10L12.6577 14.5885C12.8849 14.8483 12.8586 15.2431 12.5987 15.4705C12.339 15.6977 11.9441 15.6713 11.7168 15.4115L7.34294 10.4115C7.13683 10.176 7.13683 9.82412 7.34294 9.58853L11.7168 4.5885C11.9441 4.3287 12.339 4.30233 12.5987 4.5296Z"
                className="fill-dark dark:fill-secondary"
              />
            </svg>
          </Link>
          <h6 className="capitalize text-h6 text-textSecondary">Templates</h6>
        </div>
        <div className="grid gap-4 md:gap-0 md:flex items-center justify-between">
          <div>
            <h3 className="capitalize text-h3 text-textPrimary mb-2 dark:text-secondary">
              Chat App Template
            </h3>
            <p className="text-textSecondary text-h5 lg:w-2/3">
              Need a boost in your app design? Grab a free Flutter UI kit! These
              handy Flutter UI libraries offer a variety of pre-designed
              templates, making it easy for you to create stunning apps. The
              best part you can download beautiful.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <button className="btn_primary_s flex items-center gap-2 w-full justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.2482 10.1701C4.79637 11.5422 3.85959 13.1933 3.45058 14.267C3.30312 14.6541 2.8698 14.8483 2.48272 14.7009C2.09564 14.5534 1.90139 14.1201 2.04885 13.733C2.52873 12.4733 3.58362 10.6245 5.21789 9.07992C6.86097 7.52706 9.12689 6.25 11.9997 6.25C14.8725 6.25 17.1385 7.52706 18.7815 9.07992C20.4158 10.6245 21.4707 12.4733 21.9506 13.733C22.098 14.1201 21.9038 14.5534 21.5167 14.7009C21.1296 14.8483 20.6963 14.6541 20.5488 14.267C20.1398 13.1933 19.2031 11.5422 17.7512 10.1701C16.3082 8.80628 14.3936 7.75 11.9997 7.75C9.60588 7.75 7.69124 8.80628 6.2482 10.1701ZM11.9997 11.75C10.7571 11.75 9.74971 12.7574 9.74971 14C9.74971 15.2426 10.7571 16.25 11.9997 16.25C13.2424 16.25 14.2497 15.2426 14.2497 14C14.2497 12.7574 13.2424 11.75 11.9997 11.75ZM8.24971 14C8.24971 11.9289 9.92865 10.25 11.9997 10.25C14.0708 10.25 15.7497 11.9289 15.7497 14C15.7497 16.0711 14.0708 17.75 11.9997 17.75C9.92865 17.75 8.24971 16.0711 8.24971 14Z"
                  className="fill-dark dark:fill-secondary"
                />
              </svg>
              <p>Preview</p>
            </button>
            <button className="btn_primary_a text-nowrap w-full">
              Get Code
            </button>
          </div>
        </div>

        {/* slider cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <div className="relative flex justify-center overflow-hidden group rounded-2xl">
            <img
              className="rounded-2xl border border-secondary"
              src={templateImgOne}
              alt=""
            />
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
          <div className="relative flex justify-center overflow-hidden group rounded-2xl">
            <img
              className="rounded-2xl border border-secondary"
              src={templateImgOne}
              alt=""
            />
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
          <div className="relative flex justify-center overflow-hidden group rounded-2xl">
            <img
              className="rounded-2xl border border-secondary"
              src={templateImgOne}
              alt=""
            />
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
          <div className="relative flex justify-center overflow-hidden group rounded-2xl">
            <img
              className="rounded-2xl border border-secondary"
              src={templateImgOne}
              alt=""
            />
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
          <div className="relative flex justify-center overflow-hidden group rounded-2xl">
            <img
              className="rounded-2xl border border-secondary"
              src={templateImgOne}
              alt=""
            />
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
        </div>

        {/* right side revenue cat content for mobile devices */}
        <div className="lg:hidden border border-secondary rounded-2xl w-full md:w-1/2">
          <div className="flex justify-end">
            <p className="capitalize text-h7 font-medium px-2 py-1 text-textSecondary inline-block border border-t-0 border-r-0 rounded-lg">
              Sponsored
            </p>
          </div>
          <div className="grid gap-2 p-4">
            <img src={revenueIcon} alt="" />
            <p className="text-h6 text-black dark:text-textSecondary">
              Libriwi is a plugin for Figma that lets you easily created and
              share Figma groups, layouts and components with a single click of
              the button.
            </p>
            <button className="btn_primary_a ml-auto">Learn more</button>
          </div>
        </div>

        <div className="flex gap-5 items-start w-full">
          {/* overview */}
          <div className="grid gap-4 lg:w-4/5">
            <h3 className="capitalize text-h3 text-textPrimary dark:text-secondary">
              overview
            </h3>
            <p className="text-textSecondary">
              Need a boost in your app design? Grab a free Flutter UI kit! These
              handy Flutter UI libraries offer a variety of pre-designed
              templates, making it easy for you to create stunning apps. The
              best part you can download beautiful.
            </p>
            <img src={overviewImg} alt="" />
            <p className="text-textSecondary">
              Need a boost in your app design? Grab a free Flutter UI kit! These
              handy Flutter UI libraries offer a variety of pre-designed
              templates, making it easy for you to create stunning apps. The
              best part you can download beautiful.
            </p>
            <h3 className="capitalize text-textPrimary text-h3 dark:text-secondary">
              Build you shop app in days
            </h3>
            <p className="text-textSecondary">
              Need a boost in your app design? Grab a free Flutter UI kit! These
              handy Flutter UI libraries offer a variety of pre-designed
              templates, making it easy for you to create stunning apps. The
              best part you can download beautiful. Need a boost in your app
              design? Grab a free Flutter UI kit! These handy Flutter UI
              libraries offer a variety of pre-designed templates, making it
              easy for you to create stunning apps. The best part you can
              download beautiful.
            </p>
          </div>

          {/* right side revenue cat content desktop or laptop devices */}
          <div className="hidden lg:grid border border-secondary rounded-2xl w-1/5">
            <div className="flex justify-end">
              <p className="capitalize text-h7 font-medium px-2 py-1 text-textSecondary inline-block border border-t-0 border-r-0 rounded-lg">
                Sponsored
              </p>
            </div>
            <div className="grid gap-2 p-4">
              <img src={revenueIcon} alt="" />
              <p className="text-h6 text-black dark:text-textSecondary">
                Libriwi is a plugin for Figma that lets you easily created and
                share Figma groups, layouts and components with a single click
                of the button.
              </p>
              <button className="btn_primary_a ml-auto">Learn more</button>
            </div>
          </div>
        </div>
      </div>

      {/* you may like */}
      <div className="grid gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-h3 text-textPrimary capitalize dark:text-secondary">
            You may also like...
          </h3>
          <p className="text-h7 text-textSecondary">See all</p>
        </div>

        {/* you may like cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="grid gap-2">
            <img
              className="rounded-lg w-full object-cover"
              src={templateOne}
              alt=""
            />
            <div className="flex justify-between">
              <h2 className="capitalize font-semibold text-textPrimary leading-[20.8px] dark:text-secondary">
                Foodly Restaurent App template
              </h2>
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 items-center">
                  <img src={phoneIcon} alt="" />
                  <p className="text-sm leading-[18.2px] dark:text-secondary">
                    28
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={downloadIcon} alt="" />
                  <p className="text-sm leading-[18.2px] dark:text-secondary">
                    546
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <img
              className="rounded-lg w-full object-cover"
              src={templateTwo}
              alt=""
            />
            <div className="flex justify-between">
              <h2 className="capitalize font-semibold text-textPrimary leading-[20.8px] dark:text-secondary">
                Flutter animation template
              </h2>
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 items-center">
                  <img src={phoneIcon} alt="" />
                  <p className="text-sm leading-[18.2px] dark:text-secondary">
                    28
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={downloadIcon} alt="" />
                  <p className="text-sm leading-[18.2px] dark:text-secondary">
                    546
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <img
              className="rounded-lg w-full object-cover"
              src={templateThree}
              alt=""
            />
            <div className="flex justify-between">
              <h2 className="capitalize font-semibold text-textPrimary leading-[20.8px] dark:text-secondary">
                Flutter animation template
              </h2>
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 items-center">
                  <img src={phoneIcon} alt="" />
                  <p className="text-sm leading-[18.2px] dark:text-secondary">
                    28
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={downloadIcon} alt="" />
                  <p className="text-sm leading-[18.2px] dark:text-secondary">
                    546
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetails;
