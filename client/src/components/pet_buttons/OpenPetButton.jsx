import { Link } from "react-router-dom";

export default function OpenPetButton({petId}) {
  return (
    <Link to={`/open-borrow/${petId}`} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
      Open To Borrow
    </Link>
  );
}
