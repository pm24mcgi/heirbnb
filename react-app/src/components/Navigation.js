
import React from 'react';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginModal from './auth/Login';
import SignUpModal from './auth/Signup';

const Navigation = () => {
  const user = useSelector(state => state.session.user)

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <div className='nav-bar-left-start'>
          <div className="search-container">
            <input> </input>
          </div>
        </div>
        <div className='nav-bar-left-end'>

          <LogoutButton />
        </div>
      </>
    )
  }
  else {
    sessionLinks = (
      <>
        <LoginModal />
        <SignUpModal />
      </>
    )
  }

  return (
    <div className='nav-bar'>
      <div className='nav-bar-left'>
        <NavLink to='/' exact={true} activeClassName='active'>
          Home
        </NavLink>
      </div>
      <div className='nav-bar-right'>
        {sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
