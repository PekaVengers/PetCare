import { Link, useLoaderData } from "react-router-dom"

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

export default function PetDetail() {
  const petData = useLoaderData();
  const user = {
    name: "some user", id: 1
  }

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      {user.id === petData.ownerId && (
        <div className="mb-4">
        <Link
          to="#"
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mr-2"
        >
          Update Details
        </Link>
        <Link
          to="#"
          className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md"
        >
          Open For Borrow
        </Link>
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
