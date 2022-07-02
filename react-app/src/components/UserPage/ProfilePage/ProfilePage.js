import { useSelector } from "react-redux";


function ProfilePage({user}){
const {first_name, last_name, photo, username } = user


  return (
    <div className="profile-page profile-section">
      <p>Welcome back, {first_name && last_name ? `${first_name} ${last_name}` : username  } </p>
    </div>

  )
}

export default ProfilePage;
