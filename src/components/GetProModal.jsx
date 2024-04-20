import logo from '../assets/logo.svg';
import ticIcon from '../assets/icons/tic.svg';
import darkTicIcon from '../assets/icons/darkTicIcon.svg';

const GetProModal = ({ isOpen, onClose }) => {
  return (
    <dialog id="getProModal" className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-box grid gap-5 max-w-[708px]">
        <div className="grid gap-5">
          <img src={logo} alt="" />
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
          <h3 className="text-h3 text-textPrimary text-center capitalize">
            Upgrade to access the full library.
          </h3>
        </div>
        <div className="flex gap-4">
          <div className="w-full border border-secondary p-4 rounded-lg grid gap-4">
            <h5 className="text-h5 font-semibold text-textPrimary">Monthly</h5>
            <p className="text-textPrimary ">
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
          <div className="bg-primary text-white w-full border border-secondary p-4 rounded-lg grid gap-4">
            <div className="flex justify-between items-center">
              <h5 className="text-h5 font-semibold text-white">Yearly</h5>
              <p className="text-h7 px-2 py-1 rounded-2xl border border-white">
                Saved ~35%
              </p>
            </div>
            <p className="text-textPrimary flex items-center gap-[10px]">
              <del className="text-textSecondary text-h3">$29</del>
              <div className="text-white">
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
            <button className="px-4 py-[14px] border border-secondary rounded-2xl font-semibold text-h5 text-textPrimary bg-bgSecondary transition-all duration-300;">
              Upgrade + Save
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default GetProModal;
