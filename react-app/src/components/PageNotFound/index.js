import { useHistory } from 'react-router-dom';
import { useEffect } from 'react'
import notFound from '../../images/airbnb-404.gif'

function PageNotFound() {
  let history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 3000)
  }, [])

  return (
    <div className="not-found-page">
      <div className="not-found-info">
        <p className="not-found-header"> OOOOPS!</p>
        <p>We can't seem to find the page you're looking for.</p>
        <p>Don't worry, we'll take you back :) </p>
        <p className='bold'>Error Code: 404</p>
      </div>
      <img src={notFound} alt="NotFound"></img>
    </div>
  )
}


export default PageNotFound;
