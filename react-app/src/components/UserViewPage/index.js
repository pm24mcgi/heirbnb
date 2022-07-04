import React from 'react';
import { useSelector } from 'react-redux';

import SplashPage from '../SplashPage';
import HomePage from '../UserPage/HomePage';

function UserViewPage() {
  const sessionUser = useSelector(state => state.session.user)

  return (
    <>
      {sessionUser ?
        <HomePage/> : <SplashPage />}
    </>
  )
}

export default UserViewPage;
