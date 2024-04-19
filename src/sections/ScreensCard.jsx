import { useState } from 'react';
// images
import screenImgOne from '../assets/screens/screens-1.png';
// import screenImgTen from '../../assets/screens/screens-10.png';
// import screenImgTwo from '../../assets/screens/screens-2.png';
// import screenImgThree from '../../assets/screens/screens-3.png';
// import screenImgFour from '../../assets/screens/screens-4.png';
// import screenImgFive from '../../assets/screens/screens-5.png';
// import screenImgSix from '../../assets/screens/screens-6.png';
// import screenImgSeven from '../../assets/screens/screens-7.png';
// import screenImgEight from '../../assets/screens/screens-8.png';
// import screenImgNine from '../../assets/screens/screens-9.png';
// icons
import copyIcon from '../assets/icons/copy.svg';

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
      <div className="relative flex justify-center overflow-hidden group rounded-2xl">
        <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange}>
            {copied ? (
              <p className="p-2 text-h6 text-primary bg-white rounded-lg">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-primary bg-white rounded-lg"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative flex justify-center overflow-hidden group rounded-2xl">
        <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange}>
            {copied ? (
              <p className="p-2 text-h6 text-primary bg-white rounded-lg">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-primary bg-white rounded-lg"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative flex justify-center overflow-hidden group rounded-2xl">
        <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange}>
            {copied ? (
              <p className="p-2 text-h6 text-primary bg-white rounded-lg">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-primary bg-white rounded-lg"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative flex justify-center overflow-hidden group rounded-2xl">
        <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange}>
            {copied ? (
              <p className="p-2 text-h6 text-primary bg-white rounded-lg">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-primary bg-white rounded-lg"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative flex justify-center overflow-hidden group rounded-2xl">
        <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange}>
            {copied ? (
              <p className="p-2 text-h6 text-primary bg-white rounded-lg">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-primary bg-white rounded-lg"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative flex justify-center overflow-hidden group rounded-2xl">
        <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange}>
            {copied ? (
              <p className="p-2 text-h6 text-primary bg-white rounded-lg">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-primary bg-white rounded-lg"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative flex justify-center overflow-hidden group rounded-2xl">
        <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange}>
            {copied ? (
              <p className="p-2 text-h6 text-primary bg-white rounded-lg">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-primary bg-white rounded-lg"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative flex justify-center overflow-hidden group rounded-2xl">
        <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange}>
            {copied ? (
              <p className="p-2 text-h6 text-primary bg-white rounded-lg">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-primary bg-white rounded-lg"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative flex justify-center overflow-hidden group rounded-2xl">
        <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange}>
            {copied ? (
              <p className="p-2 text-h6 text-primary bg-white rounded-lg">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-primary bg-white rounded-lg"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative flex justify-center overflow-hidden group rounded-2xl">
        <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
          <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
            <img src={copyIcon} alt="" />
            <h6 className="text-h6">20</h6>
          </div>
          <div onClick={handleCopyTextChange}>
            {copied ? (
              <p className="p-2 text-h6 text-primary bg-white rounded-lg">
                copied!
              </p>
            ) : (
              <button
                onClick={handleCopyText}
                className="p-2 text-h6 text-primary bg-white rounded-lg"
              >
                Copy code
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreensCard;
