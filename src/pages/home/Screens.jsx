import { useState } from 'react';
import filterIcon from '../../assets/icons/filter.png';
import rightArrowIcon from '../../assets/icons/right-arrow.svg';
import screenImgOne from '../../assets/screens/screens-1.png';
// import screenImgTen from '../../assets/screens/screens-10.png';
// import screenImgTwo from '../../assets/screens/screens-2.png';
// import screenImgThree from '../../assets/screens/screens-3.png';
// import screenImgFour from '../../assets/screens/screens-4.png';
// import screenImgFive from '../../assets/screens/screens-5.png';
// import screenImgSix from '../../assets/screens/screens-6.png';
// import screenImgSeven from '../../assets/screens/screens-7.png';
// import screenImgEight from '../../assets/screens/screens-8.png';
// import screenImgNine from '../../assets/screens/screens-9.png';
import copyIcon from '../../assets/icons/copy.svg';

const Screens = () => {
  // TODO: BUTTONS HOVER SCROLL FUNCTIONALITY PENDING
  const [currentButton, setCurrentButton] = useState(0);
  const buttonsPerClick = 10;

  const buttons = [
    'All',
    'New',
    'Popular',
    'Onboarding',
    'Auth',
    'Shop',
    'Chat',
    'Top Verification',
    'Dashboard',
    'Food',
    'Restaurant',
    'Fitness',
  ];

  const totalPages = Math.ceil(buttons.length / buttonsPerClick);

  const handleNext = () => {
    setCurrentButton((prevPage) => prevPage + 1);
  };

  const visibleButtons = buttons.slice(
    currentButton * buttonsPerClick,
    currentButton * buttonsPerClick + buttonsPerClick
  );

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-h3 text-primary leading-[31.2px]">Screens</h3>
        <button className="text-textSecondary text-xs">See all</button>
      </div>
      {/* Filter sections */}
      <div className="flex gap-2 items-center mb-4">
        <button className="flex gap-2 items-center px-4 py-2 bg-secondary rounded-full mr-4">
          <img src={filterIcon} alt="" />
          <p className="text-h6 leading-[18.2px]">Filters</p>
        </button>
        <div className="border-secondary border-r-2 py-4 mr-4"></div>
        <div className="button-container flex gap-2 items-center overflow-x-auto">
          {visibleButtons.map((button, index) => (
            <button
              key={index}
              className="text-h6 px-4 py-2 border border-secondary hover:bg-primary text-primary rounded-full hover:text-white transition-all duration-300"
              onMouseOver={(e) => e.stopPropagation()} // Prevent scrolling on button hover
            >
              {button}
            </button>
          ))}
          {currentButton < totalPages - 1 && (
            <button onClick={handleNext}>
              <img src={rightArrowIcon} alt="arrow" />
            </button>
          )}
        </div>
      </div>
      {/* Project sections */}
      <div className="grid md:grid-cols-5 gap-4">
        <div className="relative flex justify-center overflow-hidden group rounded-2xl">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
          <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
            <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
              <img src={copyIcon} alt="" />
              <h6 className="text-h6">20</h6>
            </div>
            <button className="p-2 text-h6 text-primary bg-white rounded-lg">
              Copy code
            </button>
          </div>
        </div>
        <div className="relative flex justify-center overflow-hidden group rounded-2xl">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
          <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
            <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
              <img src={copyIcon} alt="" />
              <h6 className="text-h6">20</h6>
            </div>
            <button className="p-2 text-h6 text-primary bg-white rounded-lg">
              Copy code
            </button>
          </div>
        </div>
        <div className="relative flex justify-center overflow-hidden group rounded-2xl">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
          <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
            <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
              <img src={copyIcon} alt="" />
              <h6 className="text-h6">20</h6>
            </div>
            <button className="p-2 text-h6 text-primary bg-white rounded-lg">
              Copy code
            </button>
          </div>
        </div>
        <div className="relative flex justify-center overflow-hidden group rounded-2xl">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
          <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
            <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
              <img src={copyIcon} alt="" />
              <h6 className="text-h6">20</h6>
            </div>
            <button className="p-2 text-h6 text-primary bg-white rounded-lg">
              Copy code
            </button>
          </div>
        </div>
        <div className="relative flex justify-center overflow-hidden group rounded-2xl">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
          <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
            <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
              <img src={copyIcon} alt="" />
              <h6 className="text-h6">20</h6>
            </div>
            <button className="p-2 text-h6 text-primary bg-white rounded-lg">
              Copy code
            </button>
          </div>
        </div>
        <div className="relative flex justify-center overflow-hidden group rounded-2xl">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
          <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
            <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
              <img src={copyIcon} alt="" />
              <h6 className="text-h6">20</h6>
            </div>
            <button className="p-2 text-h6 text-primary bg-white rounded-lg">
              Copy code
            </button>
          </div>
        </div>
        <div className="relative flex justify-center overflow-hidden group rounded-2xl">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
          <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
            <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
              <img src={copyIcon} alt="" />
              <h6 className="text-h6">20</h6>
            </div>
            <button className="p-2 text-h6 text-primary bg-white rounded-lg">
              Copy code
            </button>
          </div>
        </div>
        <div className="relative flex justify-center overflow-hidden group rounded-2xl">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
          <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
            <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
              <img src={copyIcon} alt="" />
              <h6 className="text-h6">20</h6>
            </div>
            <button className="p-2 text-h6 text-primary bg-white rounded-lg">
              Copy code
            </button>
          </div>
        </div>
        <div className="relative flex justify-center overflow-hidden group rounded-2xl">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
          <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
            <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
              <img src={copyIcon} alt="" />
              <h6 className="text-h6">20</h6>
            </div>
            <button className="p-2 text-h6 text-primary bg-white rounded-lg">
              Copy code
            </button>
          </div>
        </div>
        <div className="relative flex justify-center overflow-hidden group rounded-2xl">
          <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
          <div className="absolute bg-screens w-full h-full flex items-center justify-center gap-4 group-hover:bottom-0 -bottom-32 transition-all duration-300 -mb-5">
            <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
              <img src={copyIcon} alt="" />
              <h6 className="text-h6">20</h6>
            </div>
            <button className="p-2 text-h6 text-primary bg-white rounded-lg">
              Copy code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screens;
