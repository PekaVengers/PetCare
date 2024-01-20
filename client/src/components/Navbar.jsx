import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#f8aa26] p-4 font-primary uppercase">
      <div className="container mx-auto flex items-center text-[1.3rem] justify-between text-[#080909]">
        <NavLink to="/" className="text-[1.5rem] font-semibold">Home</NavLink>
        <div className="flex space-x-4">
          <NavLink to="/pets">Pets</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </div>
      </div>
    </nav>
  );
}
