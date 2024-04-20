import Templates from '../pages/templates/Templates';
import Articles from '../pages/articles/Articles';
// icons
import filterIcon from '../assets/icons/filter.png';
import closeIcon from '../assets/icons/closeIcon.svg';
import rightArrowIcon from '../assets/icons/right-arrow.svg';
import searchIcon from '../assets/icons/search.png';

const SearchModal = ({
  currentButton,
  totalPages,
  handleNext,
  visibleButtons,
}) => {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box max-w-screen-xl">
        <form
          method="dialog"
          className="flex items-center justify-between mb-5"
        >
          <div className="flex items-center gap-5">
            <div className="relative">
              <img
                className="absolute top-1/3 left-5"
                src={searchIcon}
                alt=""
              />
              <input
                className="py-[14px] pl-11
           pr-5 w-[400px] rounded-full bg-bgSecondary text-textPrimary outline-none"
                type="text"
                placeholder="Search...."
              />
            </div>

            {/* Filter sections */}
            <div className="flex gap-2 items-center">
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
          </div>
          <button>
            <img src={closeIcon} alt="" />
          </button>
        </form>
        <Templates />
        <Articles />
        {/* <Screens /> */}
      </div>
    </dialog>
  );
};

export default SearchModal;
