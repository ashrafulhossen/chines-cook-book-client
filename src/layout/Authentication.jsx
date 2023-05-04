import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../page/Shared/Footer/Footer";
import Header from "../page/Shared/Header/Header";

const Authentication = () => {
	return (
		<div className="bg-blue-50 pb-1">
			<Header />
			<div className="pt-40 pb-20 mix-h-[calc(100vh-180px)]">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Authentication;
