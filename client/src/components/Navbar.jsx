import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <NavLink to="/" className="text-white text-lg font-bold">Home</NavLink>
        <div className="flex space-x-4">
          <NavLink to="/about" className="text-white">About</NavLink>
          <NavLink to="/login" className="text-white">Login</NavLink>
          <NavLink to="/register" className="text-white">Register</NavLink>
        </div>
      </div>
    </nav>
  );
}
