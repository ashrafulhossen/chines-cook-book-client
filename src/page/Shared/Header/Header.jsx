import { HiMenu, HiOutlineX,HiUserCircle } from "react-icons/hi";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Header = () => {
	const [isMenuShow, setIsMenuShow] = useState(false);

	const navigate = useNavigate();
	const goHome = () => {
		navigate("/");
	};

	return (
		<header className=" absolute top-0 w-full z-10">
            <nav className={`bg-blue-200 lg:rounded-xl flex justify-between items-center mt-0 lg:mt-1 py-4 px-10 custom-container relative lg:mb-0 ${isMenuShow && "mb-48"}`}>
			<h1
				onClick={goHome}
				className=" flex items-center flex-row justify-center flex-wrap gap-3 text-4xl font-extrabold cursor-pointer flex-shrink mr-8"
			>
                <img className="w-100 object-cover" src={logo} alt="logo" />
				<span className="text-center">Chinese CookBook</span>
			</h1>
			<div
				className="lg:hidden"
				onClick={() => setIsMenuShow(!isMenuShow)}
			>
				{isMenuShow ? (
					<HiOutlineX className="w-6 h-6" />
				) : (
					<HiMenu className="w-6 h-6" />
				)}
			</div>
			<div
				className={`${
					isMenuShow
						? "flex flex-col min-[568px]:mt-12 min-[491px]:mt-24 max-[490px]:mt-36 absolute top-12"
						: "hidden"
				} lg:flex lg:flex-row lg:static lg:mt-0 lg:items-center lg:gap-4 gap-2`}
			>
				<NavLink
					to="/"
					className={({ isActive }) =>
						`py-2 px-4 text-xl rounded-lg ${
							isActive ? "bg-blue-500 text-white" : "hover:bg-blue-200"
						}`
					}
				>
					Home
				</NavLink>
				<NavLink
					to="/blog"
					className={({ isActive }) =>
						`py-2 px-4 text-xl rounded-lg ${
							isActive ? "bg-blue-500 text-white" : "hover:bg-blue-200"
						}`
					}
				>
					Blog
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) =>
						`py-2 px-4 text-xl rounded-lg ${
							isActive ? "bg-blue-500 text-white" : "hover:bg-blue-200"
						}`
					}
				>
					About
				</NavLink>
                <div className="flex items-center gap-6">
                    <HiUserCircle className="text-4xl"/>
                    <button className="btn px-4 py-2 bg-blue-600 border-0 hover:bg-blue-500">Log Out</button>
                </div>
			</div>
		</nav>
        </header>
	);
};

export default Header;
