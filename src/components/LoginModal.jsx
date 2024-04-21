import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import SignUpModal from './SignUpModal';
import { useEffect, useState } from 'react';
import closeIcon from '../assets/icons/closeIcon.svg';

const LoginModal = ({ isOpen, onClose }) => {
  const [signUpModal, setSignUpModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginModal = document.getElementById('loginModal');
    if (isOpen && loginModal) {
      loginModal.showModal();
    } else if (!isOpen && loginModal) {
      loginModal.close();
    }
  }, [isOpen]);

  useEffect(() => {
    console.log('Current Path:', location.pathname);
    if (location.pathname === '/signup') {
      setSignUpModal(true);
    } else {
      setSignUpModal(false);
    }
  }, [location.pathname]);

  const openSignUpModal = () => {
    const signUpModal = document.getElementById('signUpModal');
    if (signUpModal) {
      signUpModal.showModal();
    }
  };

  const closeSignUpModal = () => {
    // Use Daisy UI modal method to close modal
    const signUpModal = document.getElementById('loginModal');
    if (signUpModal) {
      navigate('/');
      signUpModal.close();
    }
  };

  const closeModal = () => {
    onClose(); // Close the login modal
  };

  return (
    <dialog id="loginModal" className="modal">
      <div className="modal-box grid gap-5 dark:bg-dark dark:border dark:border-darkSecondary">
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
          <h3 className="text-h3 text-textPrimary text-center dark:text-secondary">
            Welcome Back
          </h3>
          <h5 className="text-h5 font-semibold text-textPrimary dark:text-secondary">
            Log in
          </h5>
        </div>
        <form className="grid gap-5">
          <div className="grid gap-4">
            <input
              className="bg-bgSecondary dark:bg-darkSecondary dark:text-white outline-none rounded-lg px-4 py-[15px]"
              type="email"
              placeholder="Enter your email"
            />
            <input
              className="bg-bgSecondary dark:bg-darkSecondary dark:text-white outline-none rounded-lg px-4 py-[15px]"
              type="password"
              placeholder="Enter your password"
            />
            <p className="font-medium text-textPrimary text-h7 text-end dark:text-secondary">
              Forgot password?
            </p>
          </div>
          <input className="btn_primary_a" type="submit" value="Log in" />
        </form>
        <div className="text-h5 text-textPrimary dark:text-secondary text-center">
          <span>Don&apos;t have an account?</span>{' '}
          <Link
            to="/signup"
            className="font-bold text-textPrimary dark:text-secondary"
            onClick={openSignUpModal}
          >
            Create account
          </Link>
        </div>
      </div>
      <SignUpModal isOpen={signUpModal} onClose={closeSignUpModal} />
    </dialog>
  );
};

export default LoginModal;
