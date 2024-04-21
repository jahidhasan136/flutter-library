import logo from '../assets/logo.svg';
// icons
import ticIcon from '../assets/icons/tic.svg';
import darkTicIcon from '../assets/icons/darkTicIcon.svg';
import closeIcon from '../assets/icons/closeIcon.svg';

const GetProModal = ({ isOpen, onClose }) => {
  return (
    <dialog id="getProModal" className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-box grid gap-5 max-w-[708px] dark:bg-dark dark:border dark:border-darkSecondary w-[361px] md:w-full">
        <div className="grid gap-5">
          <div className="flex justify-between items-center">
            <div></div>
            <img src={logo} alt="" />
            <img
              className="cursor-pointer"
              src={closeIcon}
              onClick={onClose}
              alt=""
            />
          </div>
          <h3 className="text-h3 text-textPrimary text-center capitalize dark:text-secondary">
            Upgrade to access the full library.
          </h3>
        </div>
        <div className="grid md:flex gap-4">
          <div className="w-full border border-secondary p-4 rounded-lg grid gap-4 dark:text-secondary dark:border-darkSecondary">
            <h5 className="text-h5 font-semibold text-textPrimary dark:text-secondary">
              Monthly
            </h5>
            <p className="text-textPrimary dark:text-secondary">
              <span className="text-h2">$29</span>
              <span className="text-h5">/monthly</span>
            </p>
            <div className="grid gap-[11px]">
              <div className="flex items-center gap-2">
                <img src={ticIcon} alt="" />
                <p className="text-h5">Full access</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={ticIcon} alt="" />
                <p className="text-h5">Unlimited downloads</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={ticIcon} alt="" />
                <p className="text-h5">Unlimited copy code</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={ticIcon} alt="" />
                <p className="text-h5">Premium articles</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={ticIcon} alt="" />
                <p className="text-h5">Premium videos</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={ticIcon} alt="" />
                <p className="text-h5">Early access of code</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={ticIcon} alt="" />
                <p className="text-h5">Billed monthly</p>
              </div>
            </div>
            <button className="btn_primary_a">Upgrade</button>
          </div>
          <div className="bg-primary dark:bg-white dark:text-dark text-white w-full border border-secondary p-4 rounded-lg grid gap-4">
            <div className="flex justify-between items-center">
              <h5 className="text-h5 font-semibold text-white dark:text-dark">
                Yearly
              </h5>
              <p className="text-h7 px-2 py-1 rounded-2xl border border-white dark:border-dark">
                Saved ~35%
              </p>
            </div>
            <p className="text-textPrimary flex items-center gap-[10px]">
              <del className="text-textSecondary dark:text-dark text-h3">
                $29
              </del>
              <div className="text-white dark:text-dark">
                <span className="text-h2">$19</span>
                <span className="text-h5">/monthly</span>
              </div>
            </p>
            <div className="grid gap-[11px]">
              <div className="flex items-center gap-2">
                <img src={darkTicIcon} alt="" />
                <p className="text-h5">Full access</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={darkTicIcon} alt="" />
                <p className="text-h5">Unlimited downloads</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={darkTicIcon} alt="" />
                <p className="text-h5">Unlimited copy codes</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={darkTicIcon} alt="" />
                <p className="text-h5">Premium articles</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={darkTicIcon} alt="" />
                <p className="text-h5">Premium videos</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={darkTicIcon} alt="" />
                <p className="text-h5">Early access of code</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={darkTicIcon} alt="" />
                <p className="text-h5">Billed monthly</p>
              </div>
            </div>
            <button className="px-4 py-[14px] border border-secondary rounded-2xl font-semibold text-h5 text-textPrimary bg-bgSecondary dark:bg-dark dark:text-secondary transition-all duration-300">
              Upgrade + Save
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default GetProModal;
