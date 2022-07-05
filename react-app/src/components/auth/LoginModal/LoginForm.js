import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../store/session";
import logo from '../../../images/logo-auth.svg';
import Demo from "../Demo";

const LoginForm = ({ setShowLoginModal }) => {
	const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const user = useSelector((state) => state.session.user);
	const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
	const dispatch = useDispatch();

	useEffect(() => {
		const errors = [];
		if (email.length == 0) errors.push("Must provide a value for the email.");
		if (!emailRegex.test(email)) errors.push("Must provide a valid email.");
		if (password.length == 0)
			errors.push("Must provide a value for the password.");
		setErrors(errors);
	}, [email, password]);

	const onLogin = async (e) => {
		e.preventDefault();
		setHasSubmitted(true);

		if (errors.length <= 0) {
			let data = await dispatch(login( email, password ));
			if (data) {
				setErrors(data)
			}
		}
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	if (user) {
		return <Redirect to="/" />;
	}

	return (
		<form className="loginFormBody" onSubmit={onLogin}>
			<img src={logo} alt="logo-auth"/>
			<h1>Welcome Back</h1>
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
					name="email"
					type="text"
					placeholder="Email"
					value={email}
					onChange={updateEmail}
				/>
			</div>
			<div>
				<input
					className="authInputBox"
					name="password"
					type="password"
					placeholder="Password"
					value={password}
					onChange={updatePassword}
				/>
			</div>
			<button className="submitLoginBtn" type="submit">
				Login
			</button>
			<Demo />
		</form>
	);
};

export default LoginForm;
