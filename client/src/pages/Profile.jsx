import { Link, useLoaderData } from "react-router-dom"
import PetCard from "../components/PetCard";

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
  ];
  const loaderData = useLoaderData();

  return (
    <div>
      <div className="user-profile">
        <div id="user-name">Name - {loaderData.name}</div>
        <div id="user-email">Email - {loaderData.email}</div>
        <div id="user-location">Location - {loaderData.location}</div>
      </div>

      <Link to="/add-pet" id="add-pet">Add Pet</Link>
      <div className="pets">
        <h1>Your Pets</h1>
        {pets.map(pet => (
          <PetCard key={pet.id} name={pet.name} type={pet.type} breed={pet.breed} />
        ))}
      </div>

    </div>
  )
}
