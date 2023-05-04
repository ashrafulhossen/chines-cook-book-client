import React from "react";
import {
	FaAngleRight,
	FaFacebook,
	FaInstagramSquare,
	FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Footer = () => {
	return (
		<footer className="bg-blue-100">
			<div className="py-12 custom-container grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-12 items-center">
				<div className="">
					<Link to={"/"}>
						<h1 className=" flex items-center flex-col justify-center flex-wrap gap-3 text-4xl font-extrabold cursor-pointer mr-8">
							<img
								className="w-100 object-cover"
								src={logo}
								alt="logo"
							/>
							<span className="text-center">
								Chinese <br /> CookBook
							</span>
						</h1>
					</Link>
				</div>
				<div className="text-center sm:text-left">
					<h3 className="text-2xl mb-2 font-bold">About Us</h3>
					<p className="p-0 sm:pr-8 lg:p-0">
						A type of eatery that specializes in serving dishes from
						a specific cookbook. These restaurants offer a unique
						dining experience...
						<Link className="ml-4 font-bold" to={"/about"}>
							More
							<FaAngleRight className="inline" />
						</Link>
					</p>
				</div>
				<div className="flex flex-col gap-3 text-center">
					<Link className="font-bold" to={"/"}>
						Home
					</Link>
					<Link className="font-bold" to={"/blog"}>
						Blog
					</Link>
					<Link className="font-bold" to={"/about"}>
						About
					</Link>
				</div>
				<div className="flex justify-center sm:justify-start">
					<ul>
						<li className="text-xl font-bold mb-4">
							<a className="flex items-center gap-2" href="#">
								<FaFacebook className="inline text-2xl" />{" "}
								<span>Facebook</span>
							</a>
						</li>
						<li className="text-xl font-bold">
							<a
								className="flex items-center gap-2 mb-4"
								href="#"
							>
								<FaInstagramSquare className="inline text-2xl" />{" "}
								<span>Instagram</span>
							</a>
						</li>
						<li className="text-xl font-bold">
							<a className="flex items-center gap-2" href="#">
								<FaYoutube className="inline text-2xl" />{" "}
								<span>Youtube</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
