import Templates from '../pages/templates/Templates';
import Articles from '../pages/articles/Articles';
// icons

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  className="absolute top-[28%] left-5"
                >
                  <path
                    d="M9.99984 3.41666C6.6312 3.41666 3.90039 6.14746 3.90039 9.51607C3.90039 12.8847 6.6312 15.6155 9.99984 15.6155C13.3684 15.6155 16.0993 12.8847 16.0993 9.51607C16.0993 6.14746 13.3684 3.41666 9.99984 3.41666ZM2.65039 9.51607C2.65039 5.45711 5.94084 2.16666 9.99984 2.16666C14.0588 2.16666 17.3493 5.45711 17.3493 9.51607C17.3493 11.7552 16.3479 13.7604 14.7686 15.1084L16.8931 17.8231C17.1058 18.0949 17.0579 18.4877 16.7861 18.7004C16.5143 18.9132 16.1214 18.8652 15.9088 18.5934L13.7516 15.8371C12.6533 16.4903 11.3704 16.8655 9.99984 16.8655C5.94084 16.8655 2.65039 13.5751 2.65039 9.51607Z"
                    className="fill-dark dark:fill-secondary"
                  />
                </svg>
                <input
                  className="py-[14px] pl-11
           pr-5 md:w-[400px] rounded-full bg-bgSecondary text-textPrimary outline-none dark:bg-darkSecondary dark:text-secondary"
                  type="text"
                  placeholder="Search...."
                />
              </div>
              <button className="grid lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.9694 2H12.0306C13.52 2 14.6793 1.99999 15.6122 2.06889C16.559 2.13881 17.3317 2.28267 18.0358 2.60167C19.5274 3.27752 20.7225 4.47259 21.3983 5.96423C21.7173 6.66827 21.8612 7.44105 21.9311 8.38781C22 9.32065 22 10.48 22 11.9694V12.0306C22 13.52 22 14.6793 21.9311 15.6122C21.8612 16.559 21.7173 17.3317 21.3983 18.0358C20.7225 19.5274 19.5274 20.7225 18.0358 21.3983C17.3317 21.7173 16.559 21.8612 15.6122 21.9311C14.6793 22 13.52 22 12.0306 22H11.9694C10.48 22 9.32065 22 8.38781 21.9311C7.44105 21.8612 6.66827 21.7173 5.96423 21.3983C4.47259 20.7225 3.27752 19.5274 2.60167 18.0358C2.28267 17.3317 2.13881 16.559 2.06889 15.6122C1.99999 14.6793 2 13.52 2 12.0306V11.9694C2 10.48 1.99999 9.32066 2.06889 8.38781C2.13881 7.44105 2.28267 6.66827 2.60167 5.96423C3.27752 4.47259 4.47259 3.27752 5.96423 2.60167C6.66827 2.28267 7.44105 2.13881 8.38781 2.06889C9.32066 1.99999 10.48 2 11.9694 2ZM8.49829 3.56482C7.63466 3.6286 7.05961 3.75215 6.58329 3.96796C5.42313 4.49363 4.49363 5.42313 3.96796 6.58329C3.75215 7.05961 3.6286 7.63466 3.56482 8.49829C3.50048 9.36945 3.5 10.4736 3.5 12C3.5 13.5264 3.50048 14.6306 3.56482 15.5017C3.6286 16.3653 3.75215 16.9404 3.96796 17.4167C4.49363 18.5769 5.42313 19.5064 6.58329 20.032C7.05961 20.2479 7.63466 20.3714 8.49829 20.4352C9.36945 20.4995 10.4736 20.5 12 20.5C13.5264 20.5 14.6306 20.4995 15.5017 20.4352C16.3653 20.3714 16.9404 20.2479 17.4167 20.032C18.5769 19.5064 19.5064 18.5769 20.032 17.4167C20.2479 16.9404 20.3714 16.3653 20.4352 15.5017C20.4995 14.6306 20.5 13.5264 20.5 12C20.5 10.4736 20.4995 9.36945 20.4352 8.49829C20.3714 7.63466 20.2479 7.05961 20.032 6.58329C19.5064 5.42313 18.5769 4.49363 17.4167 3.96796C16.9404 3.75215 16.3653 3.6286 15.5017 3.56482C14.6306 3.50048 13.5264 3.5 12 3.5C10.4736 3.5 9.36945 3.50048 8.49829 3.56482ZM8.99478 8.99481C9.28767 8.70191 9.76254 8.70191 10.0554 8.99481L12 10.9394L13.9446 8.99481C14.2375 8.70191 14.7123 8.70191 15.0052 8.99481C15.2981 9.2877 15.2981 9.76257 15.0052 10.0555L13.0607 12L15.0052 13.9446C15.2981 14.2374 15.2981 14.7123 15.0052 15.0052C14.7123 15.2981 14.2374 15.2981 13.9445 15.0052L12 13.0607L10.0555 15.0052C9.76258 15.2981 9.28771 15.2981 8.99482 15.0052C8.70192 14.7123 8.70192 14.2374 8.99482 13.9446L10.9393 12L8.99478 10.0555C8.70188 9.76257 8.70188 9.2877 8.99478 8.99481Z"
                    className="fill-dark dark:fill-secondary"
                  />
                </svg>
              </button>
            </div>

            {/* Filter sections */}
            <div className="flex gap-2 items-center overflow-x-auto">
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
              <div className="border-secondary dark:border-darkSecondary border-r-2 py-4 mr-4"></div>
              <div className="button-container flex gap-2 items-center overflow-x-auto">
                {visibleButtons.map((button, index) => (
                  <button
                    key={index}
                    className="text-h6 px-4 py-2 border border-secondary hover:bg-secondary text-textPrimary rounded-full transition-all duration-300 dark:border-darkSecondary dark:text-secondary dark:hover:text-textPrimary text-nowrap"
                    onMouseOver={(e) => e.stopPropagation()}
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
          </div>
          <button className="hidden lg:grid">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.9694 2H12.0306C13.52 2 14.6793 1.99999 15.6122 2.06889C16.559 2.13881 17.3317 2.28267 18.0358 2.60167C19.5274 3.27752 20.7225 4.47259 21.3983 5.96423C21.7173 6.66827 21.8612 7.44105 21.9311 8.38781C22 9.32065 22 10.48 22 11.9694V12.0306C22 13.52 22 14.6793 21.9311 15.6122C21.8612 16.559 21.7173 17.3317 21.3983 18.0358C20.7225 19.5274 19.5274 20.7225 18.0358 21.3983C17.3317 21.7173 16.559 21.8612 15.6122 21.9311C14.6793 22 13.52 22 12.0306 22H11.9694C10.48 22 9.32065 22 8.38781 21.9311C7.44105 21.8612 6.66827 21.7173 5.96423 21.3983C4.47259 20.7225 3.27752 19.5274 2.60167 18.0358C2.28267 17.3317 2.13881 16.559 2.06889 15.6122C1.99999 14.6793 2 13.52 2 12.0306V11.9694C2 10.48 1.99999 9.32066 2.06889 8.38781C2.13881 7.44105 2.28267 6.66827 2.60167 5.96423C3.27752 4.47259 4.47259 3.27752 5.96423 2.60167C6.66827 2.28267 7.44105 2.13881 8.38781 2.06889C9.32066 1.99999 10.48 2 11.9694 2ZM8.49829 3.56482C7.63466 3.6286 7.05961 3.75215 6.58329 3.96796C5.42313 4.49363 4.49363 5.42313 3.96796 6.58329C3.75215 7.05961 3.6286 7.63466 3.56482 8.49829C3.50048 9.36945 3.5 10.4736 3.5 12C3.5 13.5264 3.50048 14.6306 3.56482 15.5017C3.6286 16.3653 3.75215 16.9404 3.96796 17.4167C4.49363 18.5769 5.42313 19.5064 6.58329 20.032C7.05961 20.2479 7.63466 20.3714 8.49829 20.4352C9.36945 20.4995 10.4736 20.5 12 20.5C13.5264 20.5 14.6306 20.4995 15.5017 20.4352C16.3653 20.3714 16.9404 20.2479 17.4167 20.032C18.5769 19.5064 19.5064 18.5769 20.032 17.4167C20.2479 16.9404 20.3714 16.3653 20.4352 15.5017C20.4995 14.6306 20.5 13.5264 20.5 12C20.5 10.4736 20.4995 9.36945 20.4352 8.49829C20.3714 7.63466 20.2479 7.05961 20.032 6.58329C19.5064 5.42313 18.5769 4.49363 17.4167 3.96796C16.9404 3.75215 16.3653 3.6286 15.5017 3.56482C14.6306 3.50048 13.5264 3.5 12 3.5C10.4736 3.5 9.36945 3.50048 8.49829 3.56482ZM8.99478 8.99481C9.28767 8.70191 9.76254 8.70191 10.0554 8.99481L12 10.9394L13.9446 8.99481C14.2375 8.70191 14.7123 8.70191 15.0052 8.99481C15.2981 9.2877 15.2981 9.76257 15.0052 10.0555L13.0607 12L15.0052 13.9446C15.2981 14.2374 15.2981 14.7123 15.0052 15.0052C14.7123 15.2981 14.2374 15.2981 13.9445 15.0052L12 13.0607L10.0555 15.0052C9.76258 15.2981 9.28771 15.2981 8.99482 15.0052C8.70192 14.7123 8.70192 14.2374 8.99482 13.9446L10.9393 12L8.99478 10.0555C8.70188 9.76257 8.70188 9.2877 8.99478 8.99481Z"
                className="fill-dark dark:fill-secondary"
              />
            </svg>
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
