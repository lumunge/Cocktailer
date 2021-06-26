import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Paper, Button, Typography, Grid, Container } from "@material-ui/core";
import FormInput from "./FormInput";
import useStyles from "./styles";
// redux
import { useDispatch } from "react-redux";
import { signup, signin } from "../../Actions/Auth";
// google oauth
import { GoogleLogin } from "react-google-login";

const formInitialState = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const Auth = () => {
	const [isSignUp, setIsSignUp] = useState(false);
	const [formData, setFormData] = useState(formInitialState);
	const [showPassword, setShowPassword] = useState(false);

	const dispatch = useDispatch();
	const history = useHistory();

	// styles
	const styles = useStyles();

	const switcher = () => {
		setIsSignUp(!isSignUp);
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isSignUp) {
			dispatch(signup(formData, history));
		} else {
			dispatch(signin(formData, history));
			history.push("/categories");
		}
		console.log(formData);
	};

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	// google authentication
	const googleSuccess = async (res) => {
		const result = res?.profileObj;
		const token = res?.tokenId;

		try {
			dispatch({ type: "AUTH", data: { result, token } });
			history.push("/categories");
			history.go(0)
		} catch (error) {
			console.log(error);
		}
	};

	const googleFailure = () => {
		console.log("Google SignIn Unsuccessful");
	};

	return (
		<Container className={styles.container} >
			<Paper className={styles.paper} elevation={5}>
				<Typography className={styles.heading} variant="h5">
					{isSignUp ? "Sign Up Here" : "Sign In"}
				</Typography>
				<form
					className={styles.form}
					autoComplete="off"
					onSubmit={handleSubmit}
				>
					<Grid container>
						{isSignUp && (
							<>
								<FormInput
									label="First Name"
									name="firstName"
									autoFocus
									halfScreens
									handleChange={handleChange}
								/>
								<FormInput
									label="Last Name"
									name="lastName"
									halfScreens
									handleChange={handleChange}
								/>
							</>
						)}
						<FormInput
							label="Email Address"
							name="email"
							type="email"
							handleChange={handleChange}
						/>
						<FormInput
							label="Password"
							name="password"
							type={showPassword ? "text" : "password"}
							handleChange={handleChange}
							handleShowPassword={handleShowPassword}
						/>
						{isSignUp && (
							<FormInput
								label="Confirm Password"
								name="confirmPassword"
								type="password"
								handleChange={handleChange}
							/>
						)}
					</Grid>
					<>
						<Button
							type="submit"
							variant="contained"
							color="primary"
						>
							{isSignUp ? "SignUp" : "SignIn"}
						</Button>
					</>
				</form>
				<Grid container justify="flex-end">
					<Grid item>
						<Button variant="contained" onClick={switcher}>
							{isSignUp
								? "Have an Account? SignIn"
								: "No Account? Signup"}
						</Button>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
};

export default Auth;
