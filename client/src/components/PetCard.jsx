import { Link } from "react-router-dom";

export default function PetCard({ id, name, type, breed }) {
  console.log("Petcard rendered");
  console.log(name, type, breed);
  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-4">
      <Link to={`/pets/${id}`} className="text-blue-500 font-bold text-lg mb-2 block">
        <div>
          Name: {name}
        </div>
        <div>
          Type: {type}
        </div>
        <div>
          Breed: {breed}
        </div>
      </Link>
      <div className="flex justify-between">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-700">
          Delete
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
          Open To Borrow
        </button>
      </div>
    </div>
  )
}
