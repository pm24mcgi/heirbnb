import { eraseSpot, getSpots } from "../../../store/spots";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const DeleteSpot = ({ spotId }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const onClick = () => {
		dispatch(eraseSpot(spotId));
		dispatch(getSpots());
		history.push("/");
	};

	return <button className='deleteSpotBtn' onClick={onClick}>Delete Spot</button>;
};

export default DeleteSpot;
