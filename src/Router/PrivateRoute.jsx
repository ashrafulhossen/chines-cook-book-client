import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return <div className="flex items-center justify-center"><progress className="progress w-56 h-12"></progress></div>;
	}

	if (user) {
		return <div>{children}</div>;
	}

	return <Navigate to={"/authentication/login"} state={{ from: location }} replace={true} />;
};

export default PrivateRoute;
