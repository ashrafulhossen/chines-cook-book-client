import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
	const { signIn } = useContext(AuthContext);
	const [email, setEmail] = useState(""),
		[password, setPassword] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from?.pathname || "/";

	const emailEvent = (e) => {
		setEmail(e.target.value);
	};

	const passwordEvent = (e) => {
		setPassword(e.target.value);
	};

	const signInEvent = (e) => {
		e.preventDefault();

		signIn(email, password)
			.then((result) => {
				const user = result.user;
				navigate(from, { replace: true });
				console.log(user);
			})
			.catch((err) => console.log(err.message));

		setEmail("");
		setPassword("");
	};
	return (
		<div className="hero">
			<div className="hero-content gap-12 flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl w-[300px] font-bold">Login now!</h1>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={signInEvent} className="card-body pb-4">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								onChange={emailEvent}
								value={email}
								type="email"
								placeholder="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								onChange={passwordEvent}
								value={password}
								type="text"
								placeholder="password"
								className="input input-bordered"
								required
							/>
							<label className="label">
								<a
									href="#"
									className="label-text-alt link link-hover"
								>
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn bg-blue-600  hover:bg-blue-500 border-none">Login</button>
						</div>
					</form>
					<p className="pl-8 pb-8">
						<small>New in Chinese CookBook?
                            <Link className="text-blue-700 ml-1" to={"/authentication/register"}>Register</Link>
                        </small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
