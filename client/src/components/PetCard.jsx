import { Link } from "react-router-dom";
import OpenPetButton from "./pet_buttons/OpenPetButton";
import DeletePetButton from "./pet_buttons/DeletePetButton";

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
        <DeletePetButton />
        <OpenPetButton petId={id} />
      </div>
    </div>
  )
}
