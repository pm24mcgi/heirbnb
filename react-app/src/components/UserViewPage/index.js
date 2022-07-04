import React from 'react';
import { useSelector } from 'react-redux';

import SplashPage from '../SplashPage';
import HomePage from '../UserPage/HomePage';
import SearchBar from '../Navigation/SearchBar';

function UserViewPage() {
  const sessionUser = useSelector(state => state.session.user)
  const spots = Object.values(useSelector(state => state.spot))

  return (
    <>
      {sessionUser ?
        <HomePage spots={spots}/> : <SplashPage />}
    </>
  )
}

export default UserViewPage;
