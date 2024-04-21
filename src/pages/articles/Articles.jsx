// images
import { useState } from 'react';
// icons
import filterIcon from '../../assets/icons/filterIcon.svg';
import rightArrowIcon from '../../assets/icons/right-arrow.svg';
import { Link, useLocation } from 'react-router-dom';
import ArticlesCard from '../../sections/ArticlesCard';

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
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-h3 text-textPrimary leading-[31.2px]">Articles</h2>
        <Link to="/articles" className="text-textSecondary text-xs">
          See all
        </Link>
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
        <ArticlesCard />
      </div>
    </div>
  );
};

export default Articles;
