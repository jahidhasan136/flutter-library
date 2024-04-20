import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import SignUpModal from './SignUpModal';
import { useState } from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  const [isSignUpModal, setSignUpModal] = useState(false);
  const navigate = useNavigate();
  // modals
  const openSignUpModal = () => {
    // Use Daisy UI modal method to show modal
    const signUpModal = document.getElementById('signUpModal');
    if (signUpModal) {
      signUpModal.showModal();
    }
  };

  const closeSignUpModal = () => {
    // Use Daisy UI modal method to close modal
    const signUpModal = document.getElementById('signUpModal');
    if (signUpModal) {
      onClose(!isOpen);
      navigate('/');
      signUpModal.close();
    }
  };
  return (
    <dialog id="loginModal" className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-box grid gap-5">
        <div className="grid gap-5">
          <img src={logo} alt="" />
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
          <h3 className="text-h3 text-textPrimary text-center">Welcome Back</h3>
          <h5 className="text-h5 font-semibold text-textPrimary">Log in</h5>
        </div>
        <form className="grid gap-5">
          <div className="grid gap-4">
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
            <p className="font-medium text-textPrimary text-h7 text-end">
              Forgot password?
            </p>
          </div>
          <input className="btn_primary_a" type="submit" value="Log in" />
        </form>
        <div className="text-h5 text-textPrimary text-center">
          <span>Don&apos;t have an account?</span> {''}
          <Link
            to="/signup"
            onClick={openSignUpModal}
            className="font-bold text-textPrimary"
          >
            Create account
          </Link>
          <SignUpModal isOpen={isSignUpModal} onClose={closeSignUpModal} />
        </div>
      </div>
    </dialog>
  );
};

export default LoginModal;
