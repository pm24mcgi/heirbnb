import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import { Modal } from '../../../context/Modal';
import SignupForm from "./SignUpForm";


function SignUpModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavLink to='/sign-up' exact={true} activeClassName='active' onClick={() => setShowModal(true)}>
        Signup
      </NavLink>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm showModal={setShowModal} />
        </Modal>
      )}
    </>

  )

}

export default SignUpModal;
