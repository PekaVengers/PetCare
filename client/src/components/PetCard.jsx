import { Link } from "react-router-dom";

export default function PetCard({ id, name, type, breed }) {
  console.log("Petcard rendered");
  console.log(name, type, breed);
  return (
    <div>
      <Link to={`/pets/${id}`}>
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
      <div>
        <button>Delete</button>
      </div>
      <div>
        <button>Open To Borrow</button>
      </div>
    </div>
  )
}
