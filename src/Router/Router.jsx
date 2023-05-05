import { createBrowserRouter } from "react-router-dom";
import Authentication from "../layout/Authentication";
import Main from "../layout/Main";
import ChefData from "../page/ChefData/Chef/Chef";
import ErrorPage from "../page/Error/ErrorPage";
import Home from "../page/Home/Home/Home";
import Login from "../page/Login/Login";
import Page404 from "../page/Page404/Page404";
import Register from "../page/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
        errorElement: <ErrorPage/>,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/blog", element: <Home /> },
			{ path: "/chefs/:id", element: <PrivateRoute><ChefData /></PrivateRoute> , loader: ({params}) => fetch(`https://chinese-cookbook-server.vercel.app/chefs/${params.id}`)},
		],
	},
	{
		path: "/authentication",
		element: <Authentication />,
        errorElement: <ErrorPage/>,
		children: [
			{ path: "/authentication/login", element: <Login /> },
			{ path: "/authentication/register", element: <Register /> },
		],
	},
    {path:"*", element: <Page404/>}
]);

export default router;
