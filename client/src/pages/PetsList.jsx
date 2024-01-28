import SectionHeading from "../components/SectionHeading";
import PetCard from "../components/pets/PetCard";
import DarkButton from "../components/buttons/DarkButton";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { pets as dummyPets } from "../constants/config";
import { BASE_URL } from "../utils/BASE_URL";

export default function PetsList() {
  const [pets, setPets] = useState(dummyPets);

  const { isLoggedIn } = useAuth();

  // Get All pets
  useEffect(() => {
    const handleAllPetsClick = async () => {
      try {
        const response = await fetch(BASE_URL + "/pets/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setPets(data.pets);
        console.log("All Pets response:", data);
      } catch (error) {
        console.error("Error during all pets request:", error);
      }
    };
    handleAllPetsClick();
  }, []);

  return (
    <div className="bg-[#FEFFC0] w-full min-h-screen flex flex-col justify-center items-center">
      <SectionHeading heading="Pets" styles="mt-[10rem] mb-[2rem]" />
      {isLoggedIn && (
        <Link to="add-pet">
          <DarkButton buttonText="Add your pet" />
        </Link>
      )}
      <div className="pets mt-[5rem] mb-[3rem] max-w-[90%] flex flex-wrap gap-x-[3rem] gap-y-[2rem] items-stretch justify-center">
        {pets.map(({ _id, petName, petType, petBreed, ownerMessage, startDate, endDate }) => {
          return (
            <>
              <PetCard
                key={_id}
                petName={petName}
                category={petType}
                breed={petBreed}
                ownerMessage={ownerMessage || ""}
                startDate={startDate || "15/01/2000"}
                endDate={endDate || "25/01/2000"}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
