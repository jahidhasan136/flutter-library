import { useState } from 'react';
import templateImgOne from '../../assets/screens/screens-1.png';
import overviewImg from '../../assets/templates/overview.png';
// icons
import leftArrowIcon from '../../assets/icons/leftArrowIcon.svg';
import copyIcon from '../../assets/icons/copy.svg';
import revenueIcon from '../../assets/icons/revenueIcon.svg';
import downloadIcon from '../../assets/icons/downloadIcon.svg';
import phoneIcon from '../../assets/icons/phoneIcon.svg';
import eyeIcon from '../../assets/icons/eyeIcon.svg';
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
            <img src={leftArrowIcon} alt="" />
          </Link>
          <h6 className="capitalize text-h6 text-textSecondary">Templates</h6>
        </div>
        <div className="grid gap-4 md:gap-0 md:flex items-center justify-between w-full">
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
          <div className="flex flex-shrink-0 items-start gap-4">
            <button className="btn_primary_s flex items-center gap-2 w-full">
              <img src={eyeIcon} alt="" />
              Preview
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
