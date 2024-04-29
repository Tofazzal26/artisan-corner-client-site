import { Outlet, createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllArtCraftItem from "../Pages/AllArtCraftItem/AllArtCraftItem";
import AddCraftItem from "../Pages/AddCraftItem/AddCraftItem";
import MyArtCraftList from "../Pages/MyArtCraftList/MyArtCraftList";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import CraftDetails from "../Pages/CraftDetails/CraftDetails";
import ArtCraftUpdate from "../Pages/ArtCraftUpdate/ArtCraftUpdate";
import About from "../Pages/About/About";
import CategoryFilter from "../Pages/CategoryFilter/CategoryFilter";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/artisans"),
      },
      {
        path: "/craftDetails/:id",
        element: (
          <PrivateRouter>
            <CraftDetails />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/artisans/${params.id}`),
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
        loader: () => fetch("http://localhost:3000/artisans"),
      },
      {
        path: "/addCraftItems",
        element: (
          <PrivateRouter>
            <AddCraftItem />
          </PrivateRouter>
        ),
      },
      {
        path: "/myArtCraftList",
        element: (
          <PrivateRouter>
            <MyArtCraftList />
          </PrivateRouter>
        ),
      },
      {
        path: "/subcategory/:category",
        element: <CategoryFilter />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/categoryCollection/${params.category}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/update/:id",
        element: <ArtCraftUpdate />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/artisans/${params.id}`),
      },
    ],
  },
]);

export default Router;
