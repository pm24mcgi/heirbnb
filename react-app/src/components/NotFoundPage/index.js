import { useHistory } from 'react-router-dom';
import { useEffect } from 'react'

function NotFoundPage() {
  let history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 7000)
  }, [])

  return (
    <div className="not-found-page">
      <p className="not-found-header"> OOOOPS!</p>
      <p>We can't seem to find the page you're looking for.</p>
      <p>Don't worry, we'll take you back :) </p>
      <p>Error Code: 404</p>
      <img src="/images/airbnb-404.gif" alt="NotFound"></img>
    </div>
  )
}


export default NotFoundPage;
