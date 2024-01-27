import SectionHeading from "../components/SectionHeading";
import PetCard from "../components/pets/PetCard";
import DarkButton from "../components/buttons/DarkButton";
import { pets } from "../constants/config";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PetsList() {
  const { isLoggedIn } = useAuth();
  return (
    <div className="bg-[#FEFFC0] w-full min-h-screen flex flex-col justify-center items-center">
      <SectionHeading heading="Pets" styles="mt-[10rem] mb-[2rem]" />
      {isLoggedIn && (
        <Link to="add-pet">
          <DarkButton buttonText="Add your pet" />
        </Link>
      )}
      <div className="pets mt-[5rem] mb-[3rem] max-w-[90%] flex flex-wrap gap-x-[3rem] gap-y-[2rem] items-stretch justify-center">
        {pets.map((pet) => {
          return (
            <>
              <PetCard
                key={pet.id}
                petName={pet.name}
                category={pet.category}
                breed={pet.breed}
                startDate={pet.from}
                endDate={pet.to}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
