import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="bg-transparent p-4 font-primary uppercase absolute top-0 w-full z-10">
      <div className="container mx-auto flex items-center text-[1.3rem] justify-between text-[#080909] font-semibold">
        <NavLink to="/" className="text-[1.5rem] font-semibold">
          <img src={logo} alt="logo" className="w-[6rem] h-[6rem]" />
        </NavLink>
        <div className="flex space-x-4 justify-center items-center">
          <NavLink to="/pets">Pets</NavLink>
          {isLoggedIn ? (
            <>
              <NavLink to="/profile">Profile</NavLink>
              <button onClick={logout} className="uppercase">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
