import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
	const { createUser } = useContext(AuthContext);
	const [name, setName] = useState(""),
		[email, setEmail] = useState(""),
		[password, setPassword] = useState(""),
        [photoUrl, setPhotoUrl] = useState(""),
        [passwordError, setPasswordError] = useState(false);

	const nameEvent = (e) => {
		setName(e.target.value);
	};

	const emailEvent = (e) => {
		setEmail(e.target.value);
	};

	const passwordEvent = (e) => {
		setPassword(e.target.value);
	};

    const photoUrlEvent = (e) => {
		setPhotoUrl(e.target.value);
	};

	const signUpEvent = (e) => {
		e.preventDefault();

		if (!(password.length < 6)) {
			createUser(email, password)
				.then((result) => console.log(result))
				.catch((err) => console.log(err.message));

			setEmail("");
			setPassword("");
            setPasswordError(false);
		}
	};
	return (
		<div className="hero">
			<div className="hero-content gap-12 flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl w-[350px] font-bold">
						Register now!
					</h1>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={signUpEvent} className="card-body pb-4">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								onChange={nameEvent}
								value={name}
								type="text"
								placeholder="name"
								className="input input-bordered"
								required
							/>
						</div>
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
								{password.length > 0 && password.length < 6 && <p className="text-red-500">Password must be 6 characters</p>}
							</label>
						</div>
                        <div className="form-control">
							<label className="label">
								<span className="label-text">Photo URL</span>
							</label>
							<input
								onChange={photoUrlEvent}
								value={photoUrl}
								type="text"
								placeholder="photo url"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control mt-6">
							<button className="btn bg-blue-600  hover:bg-blue-500 border-none">
								Login
							</button>
						</div>
					</form>
					<p className="pl-8 pb-8">
						<small>
							Already have an accoutn?
							<Link
								className="text-blue-700 ml-1"
								to={"/authentication/login"}
							>
								Login
							</Link>
						</small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
