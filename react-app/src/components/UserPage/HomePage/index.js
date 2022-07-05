import {  useSelector } from "react-redux";

import DesignNav from '../../Navigation/DesignNav';
import SpotsLayout from "../../Spots/SpotsLayout";


const HomePage = () => {
  const spots = Object.values(useSelector(state => state.spot))

  return (
    <div className="home-page">
      <DesignNav />
      <SpotsLayout spots={spots} />
    </div>
  )

}

export default HomePage;
