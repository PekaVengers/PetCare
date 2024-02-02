import { BASE_URL } from "./BASE_URL";

export const fetchPetDetails = async (
  petId,
  setPetDetails,
  toast
) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${BASE_URL}/user/pet/${petId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accesstoken: token,
      },
    });
    const pet = await res.json();
    console.log(pet);
    setPetDetails(pet.pet);
    if (!pet.success) {
      toast.error("Pet not found.");
    }
  } catch (e) {
    console.error("Error while fetching single pet details", e.message);
  }
};
