import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { modifySpot } from "../../../store/spots";

const EditSpot = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const { spotId } = useParams();
	const spot = useSelector((state) => state.spot[spotId]);

	const states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT',
		'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
		'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO',
		'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
		'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX',
		'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
	]

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
	const [validationErrors, setValidationErrors] = useState([]);
	const [hasSubmitted, setHasSubmitted] = useState(false);

	useEffect(() => {
		const errors = [];
		if (address.length < 5) errors.push("Must provide a valid address.");
		if (title.length < 5) errors.push("Title must be at least 5 characters.");
		if (description.length < 10)
			errors.push("Description must be more than 10 characters.");
		if (zip_code.length < 5) errors.push("Zipcode must be 5 characters.");
		if (price_per_day <= 10) errors.push("Price must be greater than 10.");
		if (bedrooms < 1) errors.push("Must have at least one bedroom.");
		if (bathrooms < 1) errors.push("Must have at least one bathroom.");
		if (city.length < 3) errors.push("City must be a valid city.");
		if (sqFt.length < 0)
			errors.push("Must provide a valid value for square feet.");
		if (lng.length < 0)
			errors.push("Must provide a valid value for square feet.");
		if (lat.length < 0)
			errors.push("Must provide a valid value for square feet.");

		setValidationErrors(errors);
	}, [address, title, description, zip_code, city]);

	const onSubmit = async (e) => {
		e.preventDefault();

		setHasSubmitted(true);

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

		// console.log(data);

		if (validationErrors.length <= 0) {
			await dispatch(modifySpot(data)).then(
				() => console.log(data),
				history.push(`/spots/${spotId}`)
			);
			setValidationErrors([]);
			setHasSubmitted(false);
		}
	};

	return (
		<form onSubmit={onSubmit}>
			{hasSubmitted && validationErrors.length > 0 && (
				<div>
					{validationErrors.map((error, ind) => (
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
				<select
					name="state"
					value={state}
					onChange={(e) => setState(e.target.value)}
				>
					<option disabled>Select a choice</option>
					{states.map((state) => (
						<option value={state}>{state}</option>
					))}
				</select>
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
				<select
					name="designType"
					value={design_type}
					onChange={(e) => setDesignType(e.target.value)}
				>
					<option disabled>Select a choice</option>
					<option value="AmazingPools">Amazing Pools</option>
					<option value="Castles">Castles</option>
					<option value="CountrySide">Country Side</option>
					<option value="Design">Design</option>
					<option value="IconicCities">Iconic Cities</option>
					<option value="Islands">Islands</option>
					<option value="LakeFront">Lake Front</option>
					<option value="Luxe">Luxe</option>
					<option value="Mansions">Mansions</option>
					<option value="Vineyards">Vineyards</option>
				</select>
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
			<button type="submit">Edit Spot</button>
		</form>
	);
};

export default EditSpot;
