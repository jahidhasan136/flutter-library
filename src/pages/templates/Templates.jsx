import TemplatesCard from '../../sections/TemplatesCard';
// icons
import filterIcon from '../../assets/icons/filter.png';
import rightArrowIcon from '../../assets/icons/right-arrow.svg';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Templates = () => {
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
        <h2 className="text-2xl text-textPrimary leading-[31.2px]">
          Templates
        </h2>
        <button className="text-textSecondary text-xs ">See all</button>
      </div>
      {/* Filter sections */}
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

      {/* templates card section */}
      <TemplatesCard />
    </div>
  );
};

export default Templates;
