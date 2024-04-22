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
      <div className="modal-box grid gap-5 dark:bg-dark dark:border dark:border-darkSecondary w-[361px] md:w-full">
        <div className="grid gap-5">
          <div className="flex justify-between items-center">
            <div></div>
            <img src={logo} alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              onClick={closeModal}
              className="cursor-pointer"
            >
              <path
                d="M11.9694 2.87122H12.0306C13.52 2.87122 14.6793 2.87121 15.6122 2.94011C16.559 3.01003 17.3317 3.15389 18.0358 3.47289C19.5274 4.14874 20.7225 5.34381 21.3983 6.83545C21.7173 7.53949 21.8612 8.31227 21.9311 9.25903C22 10.1919 22 11.3512 22 12.8406V12.9018C22 14.3912 22 15.5505 21.9311 16.4834C21.8612 17.4302 21.7173 18.2029 21.3983 18.907C20.7225 20.3986 19.5274 21.5937 18.0358 22.2695C17.3317 22.5885 16.559 22.7324 15.6122 22.8023C14.6793 22.8712 13.52 22.8712 12.0306 22.8712H11.9694C10.48 22.8712 9.32065 22.8712 8.38781 22.8023C7.44105 22.7324 6.66827 22.5885 5.96423 22.2695C4.47259 21.5937 3.27752 20.3986 2.60167 18.907C2.28267 18.2029 2.13881 17.4302 2.06889 16.4834C1.99999 15.5505 2 14.3912 2 12.9018V12.8406C2 11.3512 1.99999 10.1919 2.06889 9.25903C2.13881 8.31227 2.28267 7.53949 2.60167 6.83545C3.27752 5.34381 4.47259 4.14874 5.96423 3.47289C6.66827 3.15389 7.44105 3.01003 8.38781 2.94011C9.32066 2.87121 10.48 2.87122 11.9694 2.87122ZM8.49829 4.43604C7.63466 4.49982 7.05961 4.62337 6.58329 4.83918C5.42313 5.36485 4.49363 6.29435 3.96796 7.45451C3.75215 7.93083 3.6286 8.50588 3.56482 9.36951C3.50048 10.2407 3.5 11.3448 3.5 12.8712C3.5 14.3976 3.50048 15.5018 3.56482 16.3729C3.6286 17.2365 3.75215 17.8116 3.96796 18.2879C4.49363 19.4481 5.42313 20.3776 6.58329 20.9032C7.05961 21.1191 7.63466 21.2426 8.49829 21.3064C9.36945 21.3707 10.4736 21.3712 12 21.3712C13.5264 21.3712 14.6306 21.3707 15.5017 21.3064C16.3653 21.2426 16.9404 21.1191 17.4167 20.9032C18.5769 20.3776 19.5064 19.4481 20.032 18.2879C20.2479 17.8116 20.3714 17.2365 20.4352 16.3729C20.4995 15.5018 20.5 14.3976 20.5 12.8712C20.5 11.3448 20.4995 10.2407 20.4352 9.36951C20.3714 8.50588 20.2479 7.93083 20.032 7.45451C19.5064 6.29435 18.5769 5.36485 17.4167 4.83918C16.9404 4.62337 16.3653 4.49982 15.5017 4.43604C14.6306 4.3717 13.5264 4.37122 12 4.37122C10.4736 4.37122 9.36945 4.3717 8.49829 4.43604ZM8.99478 9.86603C9.28767 9.57313 9.76254 9.57313 10.0554 9.86603L12 11.8106L13.9446 9.86603C14.2375 9.57313 14.7123 9.57313 15.0052 9.86603C15.2981 10.1589 15.2981 10.6338 15.0052 10.9267L13.0607 12.8712L15.0052 14.8158C15.2981 15.1086 15.2981 15.5835 15.0052 15.8764C14.7123 16.1693 14.2374 16.1693 13.9445 15.8764L12 13.9319L10.0555 15.8764C9.76258 16.1693 9.28771 16.1693 8.99482 15.8764C8.70192 15.5835 8.70192 15.1086 8.99482 14.8158L10.9393 12.8712L8.99478 10.9267C8.70188 10.6338 8.70188 10.1589 8.99478 9.86603Z"
                className="fill-dark dark:fill-secondary"
              />
            </svg>
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
