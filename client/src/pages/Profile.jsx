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
    {
      id: 1,
      name: "meow",
      type: "cat",
      breed: "breed 1",
      precautions: "these are the precatuions for cat",
      interests: "these are the interests of the cat",
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
        {pets.map(({id, name, type, breed}) => (
            <PetCard key={id} id={id} name={name} type={type} breed={breed} />
        ))}
      </div>

    </div>
  )
}
