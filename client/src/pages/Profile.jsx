import { Link, useLoaderData } from "react-router-dom"
import PetCard from "../components/PetCard";
import AddPetButton from "../components/pet_buttons/AddPetButton";

export async function loader() {
  return {
    "name": "Demo Name",
    "email": "Your@gmail.com",
    "location": "Some Location",
  }
}

export default function Profile() {
  const pets = [
    {
      id: 1,
      name: "tommy",
      type: "dog",
      breed: "breed 1",
      precautions: "these are the precatuions",
      interests: "these are the interests of the dog",
    },
    {
      id: 2,
      name: "meow",
      type: "cat",
      breed: "breed 1",
      precautions: "these are the precatuions for cat",
      interests: "these are the interests of the cat",
    },
  ];
  const loaderData = useLoaderData();

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="user-profile bg-white p-6 rounded-md shadow-md mb-8">
        <div className="mb-4">
          <div className="font-bold text-lg mb-2">Name - {loaderData.name}</div>
          <div>Email - {loaderData.email}</div>
        </div>
        <div id="user-location">Location - {loaderData.location}</div>
      </div>

      <AddPetButton />

      <div className="pets">
        <h1 className="text-2xl font-bold mb-4">Your Pets</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pets.map(({ id, name, type, breed }) => (
            <PetCard key={id} id={id} name={name} type={type} breed={breed} />
          ))}
        </div>
      </div>
    </div>
  )
}
