import TemplatesCard from '../../sections/TemplatesCard';
// icons
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Templates = () => {
  // TODO: BUTTONS HOVER SCROLL FUNCTIONALITY PENDING
  const [currentButton, setCurrentButton] = useState(0);
  const buttonsPerClick = 10;
  // home page filter option hide
  const location = useLocation();
  const hideFilter =
    location.pathname === '/' ||
    location.pathname === '/login' ||
    location.pathname === '/signup';

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
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-textPrimary leading-[31.2px] dark:text-secondary">
          Templates
        </h2>
        <Link
          to="/templates"
          className="text-textSecondary text-xs hover:underline"
        >
          See all
        </Link>
      </div>
      {/* Filter sections */}
      <div>
        {hideFilter ? (
          ''
        ) : (
          <div className="flex gap-2 items-center mb-4">
            <button className="flex gap-2 items-center px-4 py-2 bg-bgSecondary rounded-full mr-4 dark:border dark:border-darkSecondary dark:bg-black dark:text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.53788 2.33331C5.441 2.33331 4.5518 3.22251 4.5518 4.31939C4.5518 5.41627 5.44099 6.30547 6.53787 6.30547C7.63472 6.30547 8.52392 5.41627 8.52392 4.31939C8.52392 3.22251 7.63472 2.33331 6.53788 2.33331ZM3.62191 3.67314C3.91722 2.33466 5.11061 1.33331 6.53788 1.33331C7.96512 1.33331 9.15852 2.33466 9.45386 3.67314L13.1187 3.67315C13.3948 3.67315 13.6187 3.897 13.6187 4.17315C13.6187 4.44929 13.3948 4.67315 13.1187 4.67315L9.50319 4.67314C9.32826 6.15557 8.06732 7.30545 6.53787 7.30545C5.0084 7.30545 3.7475 6.15557 3.57253 4.67315L2.88184 4.67314C2.60569 4.67314 2.38184 4.44929 2.38184 4.17314C2.38184 3.897 2.60569 3.67314 2.88184 3.67314H3.62191ZM9.46272 9.69451C8.36586 9.69451 7.47666 10.5837 7.47666 11.6806C7.47666 12.7774 8.36586 13.6666 9.46272 13.6666C10.5596 13.6666 11.4488 12.7774 11.4488 11.6806C11.4488 10.5837 10.5596 9.69451 9.46272 9.69451ZM6.49738 11.3268C6.67232 9.84438 7.93326 8.69451 9.46272 8.69451C10.9922 8.69451 12.2531 9.84438 12.4281 11.3268H13.1187C13.3949 11.3268 13.6187 11.5507 13.6187 11.8268C13.6187 12.103 13.3949 12.3268 13.1187 12.3268H12.3787C12.0834 13.6653 10.89 14.6666 9.46272 14.6666C8.03546 14.6666 6.84206 13.6653 6.54676 12.3268H2.88188C2.60574 12.3268 2.38188 12.103 2.38188 11.8268C2.38188 11.5507 2.60574 11.3268 2.88188 11.3268H6.49738Z"
                  className="fill-dark dark:fill-secondary"
                />
              </svg>
              <p className="text-h6 leading-[18.2px]">Filters</p>
            </button>
            <div className="border-secondary border-r-2 py-4 mr-4"></div>
            <div className="button-container flex gap-2 items-center overflow-x-auto">
              {visibleButtons.map((button, index) => (
                <button
                  key={index}
                  className="text-h6 px-4 py-2 border border-secondary hover:bg-secondary text-textPrimary rounded-full transition-all duration-300 dark:text-secondary dark:border-darkSecondary"
                  onMouseOver={(e) => e.stopPropagation()} // Prevent scrolling on button hover
                >
                  {button}
                </button>
              ))}
              {currentButton < totalPages - 1 && (
                <button onClick={handleNext}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="26"
                    viewBox="0 0 24 26"
                    fill="none"
                  >
                    <path
                      d="M13.3248 6.76254C13.6365 6.48982 14.1104 6.52147 14.3831 6.83323L19.5645 12.7563C19.8118 13.0391 19.8118 13.4612 19.5645 13.7439L14.3831 19.667C14.1103 19.9788 13.6365 20.0104 13.3248 19.7377C13.013 19.465 12.9814 18.9911 13.2541 18.6794L17.3474 14.0001H5C4.58578 14.0001 4.25 13.6643 4.25 13.2501C4.25 12.8359 4.58578 12.5001 5 12.5001H17.3474L13.2541 7.82084C12.9814 7.50908 13.013 7.03526 13.3248 6.76254Z"
                      className="fill-dark dark:fill-secondary"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* templates card section */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <TemplatesCard />
      </div>
    </div>
  );
};

export default Templates;
