import {createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import MusicList from "./components/MusicList";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/> , 
    children: [
      {
        path: "/music-list",
        element: <MusicList/>,
        children: []
      },
      {
        path: "/products",
        element: <Register/> ,
      }
    ],
  },
  {
    path: "/login",
    element: <Login/> ,
  },
  {
    path: "/register",
    element: <Register/> ,
  }
]
)

export default routes;
