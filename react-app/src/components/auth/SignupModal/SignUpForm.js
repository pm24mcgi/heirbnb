import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../../store/session";
import logo from '../../../images/logo-auth.svg';


const SignUpForm = ({ setShowSignUpModal }) => {
	const [errors, setErrors] = useState([]);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();

	useEffect(() => {
		const errors = [];
		if (username.length === 0) errors.push("Must provide a value for the username.");
		if (email.length === 0) errors.push("Must provide a value for the email.");
		if (!emailRegex.test((email))) errors.push("Must provide a valid email.");
		if (password.length === 0)
			errors.push("Must provide a value for the password.");
		if (repeatPassword.length === 0) errors.push("Must repeat the password.");
		if (repeatPassword !== password) errors.push("Passwords do not match.");
		setErrors(errors);
	}, [email, password, repeatPassword]);

	const onSignUp = async (e) => {
		e.preventDefault();
		setHasSubmitted(true);
		if (errors.length <= 0) {
			// if (password === repeatPassword) {
			const data = await dispatch(signUp(username, email, password));
			console.log(data);
			if (data) {
				setErrors(data);
			}
		}
	};

	const updateUsername = (e) => {
		setUsername(e.target.value);
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	const updateRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
	};

	if (user) {
		return <Redirect to="/" />;
	}

	return (
		<form className="loginFormBody" onSubmit={onSignUp}>
			<img src={logo} alt="logo-auth" />
			<h1>Sign Up</h1>
			<div>
				{hasSubmitted &&
					errors.map((error, ind) => (
						<p className="errorMsg" key={ind}>
							{error}
						</p>
					))}
			</div>
			<div>
				<input
					className="authInputBox"
					type="text"
					name="username"
					placeholder="Username"
					onChange={updateUsername}
					value={username}
				/>
			</div>
			<div>
				<input
					className="authInputBox"
					type="text"
					placeholder="Email Address"
					name="email"
					onChange={updateEmail}
					value={email}
				/>
			</div>
			<div>
				<input
					className="authInputBox"
					type="password"
					name="password"
					placeholder="Password"
					onChange={updatePassword}
					value={password}
				/>
			</div>
			<div>
				<input
					className="authInputBox"
					type="password"
					name="repeat_password"
					placeholder="Repeat Password"
					onChange={updateRepeatPassword}
					value={repeatPassword}
					required={true}
				/>
			</div>
			<button className="submitLoginBtn" type="submit">
				Sign Up
			</button>
		</form>
	);
};

export default SignUpForm;
