import Templates from '../pages/templates/Templates';
import Articles from '../pages/articles/Articles';
// icons
import filterIcon from '../assets/icons/filterIcon.svg';
import closeIcon from '../assets/icons/closeIcon.svg';
import rightArrowIcon from '../assets/icons/right-arrow.svg';
import searchIcon from '../assets/icons/searchIcon.svg';

const SearchModal = ({
  currentButton,
  totalPages,
  handleNext,
  visibleButtons,
}) => {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box max-w-screen-xl dark:bg-dark">
        <form
          method="dialog"
          className="flex items-center justify-between mb-5"
        >
          <div className="grid lg:flex items-center gap-5 w-full">
            <div className="flex items-center justify-between">
              <div className="relative">
                <img
                  className="absolute top-1/3 left-5"
                  src={searchIcon}
                  alt=""
                />
                <input
                  className="py-[14px] pl-11
           pr-5 w-[400px] rounded-full bg-bgSecondary text-textPrimary outline-none dark:bg-darkSecondary"
                  type="text"
                  placeholder="Search...."
                />
              </div>
              <button className="grid lg:hidden">
                <img src={closeIcon} alt="" />
              </button>
            </div>

            {/* Filter sections */}
            <div className="flex gap-2 items-center">
              <button className="flex gap-2 items-center px-4 py-2 bg-bgSecondary rounded-full mr-4 dark:border dark:border-darkSecondary dark:bg-transparent dark:text-secondary">
                <img src={filterIcon} alt="" />
                <p className="text-h6 leading-[18.2px]">Filters</p>
              </button>
              <div className="border-secondary dark:border-darkSecondary border-r-2 py-4 mr-4"></div>
              <div className="button-container flex gap-2 items-center overflow-x-auto">
                {visibleButtons.map((button, index) => (
                  <button
                    key={index}
                    className="text-h6 px-4 py-2 border border-secondary hover:bg-secondary text-textPrimary rounded-full transition-all duration-300 dark:border-darkSecondary dark:text-secondary dark:hover:text-textPrimary"
                    onMouseOver={(e) => e.stopPropagation()}
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
          <button className="hidden lg:grid">
            <img src={closeIcon} alt="" />
          </button>
        </form>
        <div className="grid gap-10">
          <Templates />
          <Articles />
          {/* <Screens /> */}
        </div>
      </div>
    </dialog>
  );
};

export default SearchModal;
