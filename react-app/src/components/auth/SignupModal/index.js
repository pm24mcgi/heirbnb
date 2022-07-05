import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import { Modal } from '../../../context/Modal';
import SignUpForm from "./SignUpForm";


function SignUpModal() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <>
      <div className="signup" onClick={() => setShowSignUpModal(true)}>
        Signup
      </div>
      {showSignUpModal && (
        <Modal onClose={() => setShowSignUpModal(false)}>
          <SignUpForm setShowSignUpModal={setShowSignUpModal} />
        </Modal>
      )}
    </>

  )

}

export default SignUpModal;
