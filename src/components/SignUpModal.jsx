import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useEffect } from 'react';
import closeIcon from '../assets/icons/closeIcon.svg';

const SignUpModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const signUpModal = document.getElementById('signUpModal');
    if (isOpen && signUpModal) {
      signUpModal.showModal();
    } else if (!isOpen && signUpModal) {
      signUpModal.close();
    }
  }, [isOpen]);

  const closeModal = () => {
    onClose(); // Close the SignUpModal
  };
  return (
    <dialog id="signUpModal" className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-box grid gap-5">
        <div className="grid gap-5">
          <div className="flex justify-between items-center">
            <div></div>
            <img src={logo} alt="" />
            <img
              className="cursor-pointer"
              src={closeIcon}
              onClick={closeModal}
              alt=""
            />
          </div>
          <h3 className="text-h3 text-textPrimary text-center capitalize">
            Create your account
          </h3>
          <h5 className="text-h5 font-semibold text-textPrimary text-start">
            Create an account
          </h5>
        </div>
        <form className="grid gap-5">
          <div className="grid gap-4">
            <input
              className="bg-bgSecondary outline-none rounded-lg px-4 py-[15px]"
              type="text"
              placeholder="Enter full name"
            />
            <input
              className="bg-bgSecondary outline-none rounded-lg px-4 py-[15px]"
              type="email"
              placeholder="Enter you email"
            />
            <input
              className="bg-bgSecondary outline-none rounded-lg px-4 py-[15px]"
              type="password"
              placeholder="Enter you password"
            />
            <p className="font-medium text-textSecondary text-h6 text-start">
              By clicking &quot;Sign Up,&quot; you agree to the{' '}
              <span className="text-textPrimary">
                License Agreement, Terms of use, and Privacy policy.
              </span>
            </p>
          </div>
          <input className="btn_primary_a" type="submit" value="Sign up" />
        </form>
        <div className="text-h5 text-textPrimary text-center">
          <span>Already have an account?</span> {''}
          <Link to="/login" className="font-bold text-textPrimary">
            Log in
          </Link>
        </div>
      </div>
    </dialog>
  );
};

export default SignUpModal;
