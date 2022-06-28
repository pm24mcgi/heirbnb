import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import { Modal } from '../../../context/Modal';
import LoginForm from "./LoginForm";


function LoginModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavLink to='/login' exact={true} activeClassName='active' onClick={() => setShowModal(true)}>
        Login
      </NavLink>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm showModal={setShowModal} />
        </Modal>
      )}
    </>

  )

}

export default LoginModal;
