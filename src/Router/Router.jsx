import {createBrowserRouter} from "react-router-dom"
import Main from "../layout/Main"
import Home from "../page/Home/Home/Home"

const router = createBrowserRouter([
    {path: "/", element: <Main/>, children: [
        {path: "/", element: <Home/>},
        {path: "/blog", element: <Home/>},
        {path: "/food", element: <Home/>},
        {path: "/about", element: <Home/>},
    ]}
])

export default router