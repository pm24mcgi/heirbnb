import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import LoginModal from '../auth/LoginModal';
import SignUpModal from '../auth/SignupModal';
import SearchBar from './SearchBar';
import ProfileButton from './ProfileButton';
import './index.css';

const Navigation = () => {
  const user = useSelector(state => state.session.user)
  let location = useLocation();

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <div className='nav-bar-center'>
          {"profile" === location.pathname.split('/')[1] ? (
            <div className='profile-links'>
              <NavLink to="/profile/bookings">
                <p className='nav-txt'>My Bookings</p>
              </NavLink>
              <NavLink to="/profile/listings">
                <p className='nav-txt'>My Listings</p>
              </NavLink>
              <NavLink to="/profile/reviews">
                <p className='nav-txt'>My Reviews</p>
              </NavLink>
              <NavLink to="/spots/new">
                <p className='nav-txt'>Create New Listing</p>
              </NavLink>
            </div>
          )
            :
            <SearchBar />
          }
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
          <img src="/images/logo-white.svg" alt="logo" />
        </NavLink>
      </div>
      {sessionLinks}
    </div>
  );
}

export default Navigation;
