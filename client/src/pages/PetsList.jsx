import SectionHeading from "../components/SectionHeading";
import PetCard from "../components/pets/PetCard";
import { pets } from "../constants/config";

export default function PetsList() {
  return (
    <div className="bg-[#FEFFC0] w-full min-h-screen flex flex-col justify-center items-center">
      <SectionHeading heading="Pets" styles="mt-[10rem]"/>
      <div className="pets my-[3rem] max-w-[90%] flex flex-wrap gap-x-[3rem] gap-y-[2rem] items-stretch justify-center">
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
