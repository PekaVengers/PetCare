import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-transparent p-4 font-primary uppercase absolute top-0 w-full z-10">
      <div className="container mx-auto flex items-center text-[1.3rem] justify-between text-[#080909] font-semibold">
        <NavLink to="/" className="text-[1.5rem] font-semibold">
          <img src={logo} alt="logo" className="w-[6rem] h-[6rem]"/>
        </NavLink>
        <div className="flex space-x-4 justify-center items-center">
          <NavLink to="/pets">Pets</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login" className="text-[#DFE8FD] bg-[#0B0019] rounded-[2rem] py-[0.1rem] px-[2rem] hover:bg-[#DFE8FD] hover:text-[#0B0019] border-2 border-black">Login</NavLink>
        </div>
      </div>
    </nav>
  );
}
