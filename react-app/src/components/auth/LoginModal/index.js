import React, { useState } from "react";

import { Modal } from '../../../context/Modal';
import LoginForm from "./LoginForm";


function LoginModal() {

  const [showLoginModal, setShowLoginModal] = useState(false);


  return (
    <>
      <div onClick={() => setShowLoginModal(true)} className='login'>
        Login
      </div>
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)}>
          <LoginForm setShowLoginModal={setShowLoginModal} />
        </Modal>
      )}
    </>

  )

}

export default LoginModal;
