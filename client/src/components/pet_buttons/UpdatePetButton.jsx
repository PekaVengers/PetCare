import { Link } from "react-router-dom";
export default function UpdatePetButton() {
  return (
    <Link
      to="#"
      className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mr-2"
    >
      Update Details
    </Link>
  );
}
