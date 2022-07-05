import BookingCard from '../BookingsPage/BookingCard';
import profilePicture from '../../../images/ProfilePic.png'

function ProfilePage({ user, myBookings}) {
  const { first_name, last_name, photo, username, bio, host } = user

  return (
    <div className="profile-section">
      <div className="banner-wrapper">
        {host &&
          <p className="welcome-message">Welcome back, {first_name && last_name ? `${first_name} ${last_name}` : username}! </p>
        }
        <p>"Thank you for using our platform to host your properties." - Your Friends From HeirBnB</p>
      </div>
      <div className="profile-page">
        <div className="about-me-container">
          <img src={photo ? photo : profilePicture} alt="avatar"/>
          <div className="bio">
            <h3>{first_name && last_name ? `${first_name} ${last_name}` : username}</h3>
            {/* <div className='about-me'>
              <h5>About Me:</h5>
              <p>{bio ? bio : "You currently do not have a bio."}</p>
            </div> */}
          </div>
        </div>
          <h4>My Upcoming trips: </h4>
        <div className="my-bookings-container">
          {myBookings?.map( booking => (
            <BookingCard booking={booking} key={booking.id}/>
          ))}

        </div>
      </div>

    </div>

  )
}

export default ProfilePage;
