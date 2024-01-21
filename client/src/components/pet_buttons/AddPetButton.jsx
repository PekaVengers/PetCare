import { Link } from "react-router-dom";

export default function AddPetButton() {
  return (
    <Link
      to="/add-pet"
      id="add-pet"
      className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mb-4"
    >
      Add Pet
    </Link>
  );
}
