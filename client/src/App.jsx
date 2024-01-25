import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Register, {action as registerAction} from './pages/Register';
import Login, {action as loginAction} from './pages/Login';
import Profile, {loader as profileLoader} from './pages/Profile';
import AddPet, {action as addPetAction} from './pages/AddPet';
import {action as borrowAction} from "./components/BorrowCard";
import PetDetail, {loader as petDetailLoader} from './pages/PetDetail';
import PetsList from './pages/PetsList';
import OpenForBorrow, {action as openBorrowAction} from './pages/OpenForBorrow';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        action: registerAction,
        path: "register",
        element: <Register />,
      },
      {
        action: loginAction,
        path: "login",
        element: <Login />
      },
      {
        path: "profile",
        element: <Profile />,
        loader: profileLoader
      },
      {
        action: addPetAction,
        path: "add-pet",
        element: <AddPet />,
      },
      {
        action: borrowAction,
        path: "pets",
        element: <PetsList />,
      },
      {
        loader: petDetailLoader,
        path: "pets/:id",
        element: <PetDetail />,
      },
      {
        action: openBorrowAction,
        path: "open-borrow/:id",
        element: <OpenForBorrow />,
      },
    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
