import {createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import MusicList from "./components/MusicList";
import MusicDetail from "./components/MusicDetail";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/> , 
    children: [
      {
        path: "/music-list",
        element: <MusicList/>,
      },
      {
        path: "/music-list/:id",
        element: <MusicDetail/>,
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
