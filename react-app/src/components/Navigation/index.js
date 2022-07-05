import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import LoginModal from '../auth/LoginModal';
import SignUpModal from '../auth/SignupModal';
import SearchBar from './SearchBar';
import ProfileButton from './ProfileButton';
import { FaCrown } from 'react-icons/fa'
import './index.css';


const Navigation = ({spots, setFiltered }) => {
  let location = useLocation();
  const user = useSelector(state => state.session.user)

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <div className='nav-bar-center'>
          {"profile" === location.pathname.split('/')[1] ? (
            <div className='profile-links'>
              <NavLink to="/profile/listings">
                <p className='nav-txt'>My Listings</p>
              </NavLink>
              <NavLink to="/spots/new">
                <p className='nav-txt'>Create New Listing</p>
              </NavLink>
            </div>
          )
            :
            <SearchBar spots={spots} setFiltered={setFiltered} />
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
          <div className='home-button-logo-replacement-container'>
            <FaCrown className='home-button-logo-replacement-icon'/>
            <div className='home-button-logo-replacement-text'>heirbnb</div>
          </div>
        </NavLink>
      </div>
      {sessionLinks}
    </div>
  );
}

export default Navigation;
