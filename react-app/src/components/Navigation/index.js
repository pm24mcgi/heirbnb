import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import LoginModal from '../auth/LoginModal';
import SignUpModal from '../auth/SignupModal';
import SearchBar from './SearchBar';
import ProfileButton from './ProfileButton';

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
                My Bookings
              </NavLink>
              <NavLink to="/profile/listings">
                My Listings
              </NavLink>
              <NavLink to="/profile/reviews">
                My Reviews
              </NavLink>
              <NavLink to="/spots/new">
                Create New Listing
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
          <img src="/images/logo.svg" alt="logo" />
        </NavLink>
      </div>
      {sessionLinks}
    </div>
  );
}

export default Navigation;
