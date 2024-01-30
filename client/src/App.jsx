import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register, { action as registerAction } from "./pages/Register";
import Login from "./pages/Login";
import Profile, { loader as profileLoader } from "./pages/Profile";
import AddPet from "./pages/AddPet";
import { action as borrowAction } from "./components/BorrowCard";
import Petfolio, { loader as petfolioLoader } from "./pages/Petfolio";
import Error from "./pages/Error"
import PetsList from "./pages/PetsList";
import OpenForBorrow, {
  action as openBorrowAction,
} from "./pages/OpenForBorrow";
import { AuthProvider } from "./contexts/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        action: registerAction,
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: <Profile />,
        loader: profileLoader,
      },
      {
        path: "add-pet",
        element: <AddPet />,
      },
      {
        action: borrowAction,
        path: "pets",
        element: <PetsList />,
      },
      {
        loader: petfolioLoader,
        path: "pets/:petId",
        element: <Petfolio />,
      },
      {
        action: openBorrowAction,
        path: "open-borrow/:id",
        element: <OpenForBorrow />,
      },
    ],
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
