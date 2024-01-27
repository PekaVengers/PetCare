import { useLoaderData, Link } from "react-router-dom";
import avatar from "../assets/images/avatar.png";
import DarkButton from "../components/pets/DarkButton";
import AddPetButton from "../components/buttons/DarkButton";
import YellowButton from "../components/pets/YellowButton";
import SectionHeading from "../components/SectionHeading";
import { useState } from "react";
import { userPets } from "../constants/config";

export async function loader() {
  return {
    name: "Demo Name",
    email: "Your@gmail.com",
    location: "Some Location",
  };
}

export default function Profile() {
  const [username, setUsername] = useState("Master");
  const [userLocation, setUserLocation] = useState("Alwar, India");
  const loaderData = useLoaderData();

  return (
    <div className="w-full min-h-screen pt-[10rem] pb-[5rem] bg-[#FEFFC0] flex flex-col items-center">
      <SectionHeading heading="Profile" />

      <div className="rounded-[3rem] bg-[#F8AA26] relative pb-[0.5rem] pr-[0.5rem] mb-[1rem]">
        <div className="py-[1.5rem] px-[2rem] rounded-[3rem] bg-[#EEF3FF] border-t-2 border-l-2 border-[#0B0019] flex flex-col gap-[1rem] items-center">
          <img src={avatar} alt="pet_profile" className="w-[6rem]" />
          <div className="petDetails flex gap-[2rem] items-center">
            <div className="details text-[#0B0019] font-primary flex flex-col items-center">
              <h1 className="petName uppercase font-bold text-[2.5rem] leading-[2.5rem]">
                {username}
              </h1>
              <h2 className="dateRange font-semibold text-[1.5rem]">
                {`Location: ${userLocation}`}
              </h2>
              <h3 className="breed text-[1.3rem]">{`mastermickey2000@gmail.com`}</h3>
            </div>
          </div>
          {/* <div className="buttons flex justify-between gap-[2rem]">
            <DarkButton
              buttonText="Demo Button"
              styles="bg-[#F8AA26] text-[1.2rem] px-[2rem] py-[0.3rem] text-black"
            />
          </div> */}
        </div>
      </div>
      <h2 className="relative text-[4rem] font-primary uppercase font-bold my-[1rem]">
        Your Pets
      </h2>
      <Link to="add-pet">
        <AddPetButton buttonText="Add your pet" />
      </Link>
      <div className="pets mt-[2rem] w-[70%] flex flex-wrap justify-center gap-x-[2rem] gap-y-[3rem]">
        {userPets.map(({ id, name, category, breed, age }) => (
          <>
            <div
              key={id}
              className="rounded-[3rem] bg-[#F8AA26] relative pb-[0.5rem] pr-[0.5rem]"
            >
              <div className="py-[1rem] px-[2rem] rounded-[3rem] bg-[#EEF3FF] border-t-2 border-l-2 border-[#0B0019] flex flex-col gap-[1.5rem] items-center">
                <div className="petDetails flex gap-[2rem] items-center">
                  <img src={avatar} alt="pet_profile" className="w-[6rem]" />
                  <div className="details text-[#0B0019] font-primary flex flex-col ">
                    <h1 className="petName uppercase font-bold text-[2.5rem] leading-[2.5rem]">
                      {name}
                    </h1>
                    <h3 className="breed text-[1.5rem]">{`${category}, ${breed}`}</h3>
                    <h2 className="dateRange font-semibold text-[1.5rem]">
                      {`Age: ${age} Years`}
                    </h2>
                  </div>
                </div>
                <div className="buttons flex justify-between gap-[2rem]">
                  <DarkButton
                    buttonText="Delete Pet"
                    styles="bg-red-600 text-[1.2rem] px-[1.5rem] py-[0.2rem]"
                  />
                  <YellowButton
                    buttonText="Open Pet"
                    styles="bg-green-400 text-[1.2rem] px-[1.5rem] py-[0.2rem]"
                  />
                </div>
              </div>
            </div>
            {/* <PetCard key={id} id={id} name={name} category={category} breed={breed} /> */}
          </>
        ))}
      </div>
    </div>
  );
}
