import {createBrowserRouter} from "react-router-dom"
import Main from "../layout/Main"
import Home from "../page/Home/Home/Home"
import Login from "../page/Login/Login"
import Register from "../page/Register/Register"

const router = createBrowserRouter([
    {path: "/", element: <Main/>, children: [
        {path: "/", element: <Home/>},
        {path: "/blog", element: <Home/>},
        {path: "/about", element: <Home/>},
    ]},
    {path: "login", element: <Login/>},
    {path: "register", element: <Register/>},
])

export default router