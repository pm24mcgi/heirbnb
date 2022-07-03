import { useSelector } from "react-redux";


function ProfilePage({ user }) {
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
        <img src={photo ? photo : "/images/ProfilePic.png"} alt="avatar"></img>
        <div className="about-me-container">
          <h3>About Me:</h3>
          {bio ? <p className="bio">{bio}</p> : <p className="bio">You currently do not have a bio.</p>
          }
        </div>
        <div className="trips-container">
          <h3>My Incoming trips: </h3>

        </div>
      </div>

    </div>

  )
}

export default ProfilePage;
