import { Outlet, createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllArtCraftItem from "../Pages/AllArtCraftItem/AllArtCraftItem";
import AddCraftItem from "../Pages/AddCraftItem/AddCraftItem";
import MyArtCraftList from "../Pages/MyArtCraftList/MyArtCraftList";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allArtCraftItems",
        element: <AllArtCraftItem />,
      },
      {
        path: "/addCraftItems",
        element: <AddCraftItem />,
      },
      {
        path: "/myArtCraftList",
        element: <MyArtCraftList />,
      },
    ],
  },
]);

export default Router;
