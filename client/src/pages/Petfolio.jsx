import { useLoaderData } from "react-router-dom"
import OpenPetButton from "../components/pet_buttons/OpenPetButton";
import DeletePetButton from "../components/pet_buttons/DeletePetButton";
import UpdatePetButton from "../components/pet_buttons/UpdatePetButton";

export async function loader() {
  return {
    id: 1,
    name: "tommy",
    profile: "profile image",
    type: "dog",
    breed: "new breed",
    gender: "male",
    age: 2,
    interests: "These are the interests of the pet",
    precautions: "These are the precautions that need to be taken care of",
    ownerId: 1,
  }
}

export default function Petfolio() {
  const petData = useLoaderData();
  const user = {
    name: "some user", id: 1
  }

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      {user.id === petData.ownerId && (
        <div className="mb-4">
          <UpdatePetButton />
          <OpenPetButton petId={petData.id} />
          <DeletePetButton petId={petData.id} />
        </div>
      )}
      <div className="mb-4">
        <span className="font-bold">Profile:</span> {petData.profile}
      </div>
      <div className="mb-4">
        <span className="font-bold">Name:</span> {petData.name}
      </div>
      <div className="mb-4">
        <span className="font-bold">Type:</span> {petData.type}
      </div>
      <div className="mb-4">
        <span className="font-bold">Breed:</span> {petData.breed}
      </div>
      <div className="mb-4">
        <span className="font-bold">Gender:</span> {petData.gender}
      </div>
      <div className="mb-4">
        <span className="font-bold">Age:</span> {petData.age}
      </div>
      <div className="mb-4">
        <span className="font-bold">Interests:</span> {petData.interests}
      </div>
      <div className="mb-4">
        <span className="font-bold">Precautions:</span> {petData.precautions}
      </div>
    </div>
  );
}
