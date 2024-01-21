export default function DeletePetButton({petId}) {
  function deletePet() {
    console.log("The pet is deleted!", petId);
  }
  return (
    <button onClick={deletePet} className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-700">
      Delete
    </button>
  );
}
