import React from 'react';
import { useSelector } from 'react-redux';

import { NavLink, useParams } from 'react-router-dom';
import LoginModal from '../auth/LoginModal';
import SignUpModal from '../auth/SignupModal';
import SearchBar from './SearchBar';
import ProfileButton from './ProfileButton';

const Navigation = () => {
  const user = useSelector(state => state.session.user)
  const {profile} = useParams();

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <div className='nav-bar-center'>
          {profile ? "fadsf" : <SearchBar /> }
        </div>
        <div className='nav-bar-right'>
          <ProfileButton />
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
