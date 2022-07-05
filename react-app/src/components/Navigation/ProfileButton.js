import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import { BsJournalBookmark } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineLogout } from 'react-icons/ai';
import { VscPreview } from 'react-icons/vsc';
import profilePicture from '../../images/ProfilePic.png'


import { logout } from '../../store/session';

function ProfileButton() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <>
      <div onClick={openMenu} className='profile-btn'>
        <GiHamburgerMenu />
        <img src={user.photo ? user.photo : profilePicture} alt="avatar"></img>
      </div>
      {showMenu && (
        <div className='profile-btn-nav' >
          <NavLink className="profile" to="/profile">
            <div className="profile-nav-selection">
              <CgProfile />
              <p className="dropdown-txt">Profile</p>
            </div>
          </NavLink>
          <NavLink className="listings" to="/profile/listings">
            <div className="profile-nav-selection">
              <FaHome />
              <p className="dropdown-txt">Listings</p>
            </div>
          </NavLink>
          <div className="profile-nav-selection" onClick={onLogout}>
            <AiOutlineLogout />
            <p className="dropdown-txt">Logout</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
