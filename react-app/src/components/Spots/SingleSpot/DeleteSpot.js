import { eraseSpot } from "../../../store/spots";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const DeleteSpot = ({ spotId }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const onClick = () => {
		dispatch(eraseSpot(spotId));
		history.push("/");
	};

	return <button onClick={onClick}>Delete Spot</button>;
};

export default DeleteSpot;
