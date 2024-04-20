// images
import { useState } from 'react';
import articleImgOne from '../assets/articles/article-1.png';
import articleImgTwo from '../assets/articles/article-2.png';
import articleImgThree from '../assets/articles/article-3.png';
// icons
import filterIcon from '../assets/icons/filter.png';
import rightArrowIcon from '../assets/icons/right-arrow.svg';
import { useLocation } from 'react-router-dom';

const Articles = () => {
  // TODO: BUTTONS HOVER SCROLL FUNCTIONALITY PENDING
  const [currentButton, setCurrentButton] = useState(0);
  const buttonsPerClick = 10;
  // home page filter option hide
  const location = useLocation();
  const hideFilter = location.pathname === '/';

  const buttons = [
    'All',
    'New',
    'Popular',
    'State management',
    'Animation',
    'UI',
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
        <h2 className="text-h3 text-textPrimary leading-[31.2px]">Articles</h2>
        <button className="text-textSecondary text-xs ">See all</button>
      </div>

      {/* filter sections */}
      <div>
        {hideFilter ? (
          ''
        ) : (
          <div className="flex gap-2 items-center mb-4">
            <button className="flex gap-2 items-center px-4 py-2 bg-bgSecondary rounded-full mr-4">
              <img src={filterIcon} alt="" />
              <p className="text-h6 leading-[18.2px]">Filters</p>
            </button>
            <div className="border-secondary border-r-2 py-4 mr-4"></div>
            <div className="button-container flex gap-2 items-center overflow-x-auto">
              {visibleButtons.map((button, index) => (
                <button
                  key={index}
                  className="text-h6 px-4 py-2 border border-secondary hover:bg-primary text-textPrimary rounded-full hover:text-white transition-all duration-300"
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
        )}
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <img className="rounded-2xl w-full" src={articleImgOne} alt="" />
          <div className="flex gap-5 pt-4 pb-2 text-textSecondary text-h6 leading-[18.2px] capitalize">
            <h6 className="text-h6">Mar 24, 2024</h6>
            <h6 className="text-h6">Animation</h6>
          </div>
          <h2 className="capitalize text-textPrimary font-semibold leading-[20.8px]">
            Learn flutter animation
          </h2>
          <p className="mt-2 text-textSecondary text-h6">
            Lately, more Flutter developers have been running Dart on the
            server. And it’s no wonder: who doesn’t like using...
          </p>
        </div>
        <div>
          <img className="rounded-2xl w-full" src={articleImgTwo} alt="" />
          <div className="flex gap-5 pt-4 pb-2 text-textSecondary text-h6 leading-[18.2px] capitalize">
            <h6 className="text-h6">Mar 24, 2024</h6>
            <h6 className="text-h6">Animation</h6>
          </div>
          <h2 className="capitalize text-textPrimary font-semibold leading-[20.8px]">
            Onboarding Screen with Carousel & Animated Dots
          </h2>
          <p className="mt-2 text-textSecondary text-h6">
            Lately, more Flutter developers have been running Dart on the
            server. And it’s no wonder: who doesn’t like using...
          </p>
        </div>
        <div>
          <img className="rounded-2xl w-full" src={articleImgThree} alt="" />
          <div className="flex gap-5 pt-4 pb-2 text-textSecondary text-h6 leading-[18.2px] capitalize">
            <h3 className="text-h6">Mar 24, 2024</h3>
            <h3 className="text-h6">Animation</h3>
          </div>
          <h2 className="capitalize text-textPrimary font-semibold leading-[20.8px]">
            Parallax Scroll Effect with PageView in Flutter
          </h2>
          <p className="mt-2 text-textSecondary text-h6">
            Lately, more Flutter developers have been running Dart on the
            server. And it’s no wonder: who doesn’t like using...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Articles;
