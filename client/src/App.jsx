import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Register, {action as registerAction} from './pages/Register';
import Login, {action as loginAction} from './pages/Login';
import Profile, {loader as profileLoader} from './pages/Profile';
import AddPet, {action as addPetAction} from './pages/AddPet';
import BorrowList from './pages/BorrowList';
import {action as borrowAction} from "./components/BorrowCard";
import PetDetail, {loader as petDetailLoader} from './pages/PetDetail';

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
        path: "about",
        element: <About />
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
        element: <BorrowList />,
      },
      {
        loader: petDetailLoader,
        path: "pets/:id",
        element: <PetDetail />,
      },
    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
