import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useState } from 'react';
import LoginModal from './LoginModal';

const SignUpModal = ({ isOpen, onClose }) => {
  return (
    <dialog id="signUpModal" className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-box grid gap-5">
        <div className="grid gap-5">
          <img src={logo} alt="" />
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
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
          {/* <LoginModal isOpen={isLoginModal} onClose={closeLoginModal} /> */}
        </div>
      </div>
    </dialog>
  );
};

export default SignUpModal;
