import React from 'react';

const SignUpModal = ({ isOpen, onClose }) => {
  return (
    <dialog id="signupModal" className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-box">
        <form>
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Sign Up</h3>
          {/* Add your signup form fields here */}
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </dialog>
  );
};

export default SignUpModal;
