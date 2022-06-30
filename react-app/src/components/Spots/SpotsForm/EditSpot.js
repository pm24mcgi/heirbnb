import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { modifySpot } from "../../../store/spots";
import { getSpot } from "../../../store/spots";

const EditSpot = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const { spotId } = useParams();
	const spot = useSelector((state) => state.spot[spotId]);

	const [errors, setErrors] = useState([]);
	const [address, setAddress] = useState(spot?.address);
	const [title, setTitle] = useState(spot?.title);
	const [description, setDescription] = useState(spot?.description);
	const [city, setCity] = useState(spot?.city);
	const [state, setState] = useState(spot?.state);
	const [zip_code, setZipCode] = useState(spot?.zip_code);
	const [lng, setLng] = useState(spot?.lng);
	const [lat, setLat] = useState(spot?.lat);
	const [bedrooms, setBedrooms] = useState(spot?.bedrooms);
	const [bathrooms, setBathrooms] = useState(spot?.bathrooms);
	const [sqFt, setSqFt] = useState(spot?.sqFt);
	const [design_type, setDesignType] = useState(spot?.design_type);
	const [price_per_day, setPricePerDay] = useState(spot?.price_per_day);

	const onSubmit = async (e) => {
		e.preventDefault();
		const data = {
			spotId,
			address,
			title,
			description,
			city,
			state,
			zip_code,
			lng,
			lat,
			bedrooms,
			bathrooms,
			sqFt,
			design_type,
			price_per_day,
		};

		await dispatch(modifySpot(data)).then(() =>
			history.push(`/spots/${spotId}`)
		);
	};

	return (
		<form onSubmit={onSubmit}>
			{errors.length > 0 && (
				<div>
					{errors.map((error, ind) => (
						<div key={ind}>{error}</div>
					))}
				</div>
			)}
			<div>
				<label htmlFor="title">Title</label>
				<input
					name="title"
					type="text"
					placeholder="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="address">Address</label>
				<input
					name="address"
					type="text"
					placeholder="Address"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="description">Description</label>
				<input
					name="description"
					type="text"
					placeholder="Description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="city">City</label>
				<input
					name="city"
					type="text"
					placeholder="City"
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="state">State</label>
				<input
					name="state"
					type="text"
					placeholder="State"
					value={state}
					onChange={(e) => setState(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="zipCode">Zip code</label>
				<input
					name="zipCode"
					type="number"
					placeholder="Zip code"
					value={zip_code}
					onChange={(e) => setZipCode(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="lng">Longitude</label>
				<input
					name="lng"
					type="text"
					placeholder="Longitude"
					value={lng}
					onChange={(e) => setLng(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="lat">Latitude</label>
				<input
					name="lat"
					type="text"
					placeholder="Latitude"
					value={lat}
					onChange={(e) => setLat(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="bedrooms">Number of Bedrooms</label>
				<input
					name="bedrooms"
					type="number"
					placeholder="Number of Bedrooms"
					value={bedrooms}
					onChange={(e) => setBedrooms(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="bathrooms">Number of Bathrooms</label>
				<input
					name="bathrooms"
					type="number"
					placeholder="Number of Bathrooms"
					value={bathrooms}
					onChange={(e) => setBathrooms(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="sqFt">Square Feet</label>
				<input
					name="sqFt"
					type="number"
					placeholder="Square Feet"
					value={sqFt}
					onChange={(e) => setSqFt(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="designType">Design Type</label>
				<input
					name="designType"
					type="text"
					placeholder="Design Type"
					value={design_type}
					onChange={(e) => setDesignType(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="pricePerDay">Price per day</label>
				<input
					name="pricePerDay"
					type="number"
					placeholder="Price per day"
					value={price_per_day}
					onChange={(e) => setPricePerDay(e.target.value)}
				/>
			</div>
			<button type="submit">Add Spot</button>
		</form>
	);
};

export default EditSpot;
