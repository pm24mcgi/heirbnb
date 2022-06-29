import React from 'react';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginModal from '../auth/LoginModal';
import SignUpModal from '../auth/SignupModal';
import SearchBar from './SearchBar';

const Navigation = () => {
  const user = useSelector(state => state.session.user)

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <div className='nav-bar-center'>
          <SearchBar />
        </div>
        <div className='nav-bar-right'>
          <LogoutButton />
        </div>
      </>
    )
  }
  else {
    sessionLinks = (
      <div className='nav-bar-right'>
        <LoginModal />
        <SignUpModal />
      </div>
    )
  }

  return (
    <div className='nav-bar'>
      <div className='nav-bar-left'>
        <NavLink to='/' exact={true} activeClassName='active'>
          Home
        </NavLink>
      </div>
      {sessionLinks}
    </div>
  );
}

export default Navigation;
