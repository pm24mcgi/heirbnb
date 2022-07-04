import SpotsCard from "./SpotsCard"
import { useParams } from "react-router-dom";


function SpotsLayout({ spots }) {
  const { design_type } = useParams();

  let filter_spots;
  if (design_type) {
    filter_spots = spots?.filter(spot => spot.design_type === design_type)
  }

  return (

    <div className="spots-card-container">
      {design_type ? filter_spots?.map(spot => (
        <SpotsCard spot={spot} key={spot.id} />
      ))
        :
        spots.map(spot => (
          <SpotsCard spot={spot} key={spot.id} />
        ))
      }
    </div>
  )
}

export default SpotsLayout;
