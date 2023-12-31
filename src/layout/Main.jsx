import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../page/Shared/Footer/Footer";
import Header from "../page/Shared/Header/Header";

const Main = () => {
	return (
		<div className="bg-blue-50 pb-4">
			<Header />
			<div className="min-h-[calc(100vh-280px)]">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Main;
