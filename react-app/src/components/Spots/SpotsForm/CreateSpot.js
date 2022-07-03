import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addSpot, getSpots } from "../../../store/spots";
import { uploadImage } from "../../../store/spots";
import ImageUploader from "../../Tools/ImageUploader";

const CreateSpot = () => {
	// const user = useSelector((state) => state.session.user);
	const history = useHistory();
	const dispatch = useDispatch();

	const states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT',
		'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
		'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO',
		'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
		'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX',
		'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
	];

	const [address, setAddress] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("AL");
	const [zip_code, setZipCode] = useState(0);
	const [lng, setLng] = useState("");
	const [lat, setLat] = useState("");
	const [bedrooms, setBedrooms] = useState(0);
	const [bathrooms, setBathrooms] = useState(0);
	const [sqFt, setSqFt] = useState(0);
	const [design_type, setDesignType] = useState("AmazingPools");
	const [price_per_day, setPricePerDay] = useState(0);
	const [images, setImages] = useState([]);
	const [validationErrors, setValidationErrors] = useState([]);
	const [hasSubmitted, setHasSubmitted] = useState(false);

	const addImages = (images, spot_id) => {
		images.forEach(async (image) => {
			const imageData = {
				image: image,
				url: image.filename,
				spot_id: spot_id,
			};
			await dispatch(uploadImage(imageData));
		});
	};

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
		if (sqFt.length < 0) errors.push("Must provide a valid value for square feet.");
		if (lng.length < 0) errors.push("Must provide a valid value for square feet.");
		if (lat.length < 0) errors.push("Must provide a valid value for square feet.");

		setValidationErrors(errors);
	}, [address, title, description, zip_code, city, price_per_day, bedrooms, bathrooms, sqFt, lng, lat]);

	const onSubmit = async (e) => {
		e.preventDefault();

		setHasSubmitted(true);
		const imageFiles = images.map((image) => image.file);
		const data = {
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

		if (validationErrors.length <= 0) {
			const spot = await dispatch(addSpot(data));
			const spot_id = spot.id;
			await addImages(imageFiles, spot_id);
			await dispatch(getSpots());
			history.push(`/spots/${spot_id}`);
			setValidationErrors([]);
			setHasSubmitted(false);
		}
	};

	return (
		<div className="form-page">
			<form onSubmit={onSubmit}>
				{hasSubmitted && validationErrors.length > 0 && (
					<div>
						{validationErrors.map((error, idx) => (
							<div key={idx}>{error}</div>
						))}
					</div>
				)}
				<div></div>
				<div>
					<label htmlFor="title">Title</label>
					<input
						required
						name="title"
						type="text"
						placeholder="Title"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
				</div>
				<div>
					<label htmlFor="address">Address</label>
					<input
						required
						name="address"
						type="text"
						placeholder="Address"
						onChange={(e) => setAddress(e.target.value)}
						value={address}
					/>
				</div>
				<div>
					<label htmlFor="description">Description</label>
					<input
						required
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
						required
						name="city"
						type="text"
						placeholder="City"
						onChange={(e) => setCity(e.target.value)}
						value={city}
					/>
				</div>
				<div>
					<label htmlFor="state">State</label>
					<select
						required
						name="state"
						onChange={(e) => setState(e.target.value)}
						value={state}
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
						required
						name="zipCode"
						type="number"
						placeholder="Zip code"
						onChange={(e) => setZipCode(e.target.value)}
						value={zip_code}
					/>
				</div>
				<div>
					<label htmlFor="lng">Longitude</label>
					<input
						required
						name="lng"
						type="text"
						placeholder="Longitude"
						onChange={(e) => setLng(e.target.value)}
						value={lng}
					/>
				</div>
				<div>
					<label htmlFor="lat">Latitude</label>
					<input
						required
						name="lat"
						type="text"
						placeholder="Latitude"
						onChange={(e) => setLat(e.target.value)}
						value={lat}
					/>
				</div>
				<div>
					<label htmlFor="bedrooms">Number of Bedrooms</label>
					<input
						required
						name="bedrooms"
						type="number"
						placeholder="Number of Bedrooms"
						onChange={(e) => setBedrooms(e.target.value)}
						value={bedrooms}
					/>
				</div>
				<div>
					<label htmlFor="bathrooms">Number of Bathrooms</label>
					<input
						required
						name="bathrooms"
						type="number"
						placeholder="Number of Bathrooms"
						onChange={(e) => setBathrooms(e.target.value)}
						value={bathrooms}
					/>
				</div>
				<div>
					<label htmlFor="sqFt">Square Feet</label>
					<input
						required
						name="sqFt"
						type="number"
						placeholder="Square Feet"
						onChange={(e) => setSqFt(e.target.value)}
						value={sqFt}
					/>
				</div>
				<div>
					<label htmlFor="designType">Design Type</label>
					<select
						required
						name="designType"
						onChange={(e) => setDesignType(e.target.value)}
						value={design_type}
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
						required
						name="pricePerDay"
						type="number"
						placeholder="Price per day"
						onChange={(e) => setPricePerDay(e.target.value)}
						value={price_per_day}
					/>
				</div>
				<button type="submit">Add Spot</button>
			</form>
			<ImageUploader images={images} setImages={setImages} />
		</div>
	);
};

export default CreateSpot;
