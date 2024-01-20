export default function PetCard({ name, type, breed }) {
  console.log("Petcard rendered");
  console.log(name, type, breed);
  return (
    <div>
      <div>
        Name: {name}
      </div>
      <div>
        Type: {type}
      </div>
      <div>
        Breed: {breed}
      </div>
      <div>
      <button>Delete</button>
      </div>
      <div>
      <button>Open To Borrow</button>
      </div>
    </div>
  )
}
