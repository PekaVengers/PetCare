import { useLoaderData } from "react-router-dom";
import OpenPetButton from "../components/pet_buttons/OpenPetButton";
import DeletePetButton from "../components/pet_buttons/DeletePetButton";
import UpdatePetButton from "../components/pet_buttons/UpdatePetButton";
import avatar from "../assets/images/avatar.png";
import SectionHeading from "../components/SectionHeading";
import dog from "../assets/images/dog.png";
import puppy1 from "../assets/images/puppy-1.png";
import puppy2 from "../assets/images/puppy-2.png";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { BASE_URL } from "../utils/BASE_URL";
import { useParams } from "react-router-dom";

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
  };
}

export default function Petfolio() {
  // eslint-disable-next-line no-unused-vars
  const [petId, setPetId] = useState(useParams().petId);
  const { login } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const petData = useLoaderData();
  const user = {
    name: "some user",
    id: 1,
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") && localStorage.getItem("token")) {
      login();
      setIsLoggedIn(true);
    }
  }, [isLoggedIn, login]);

  useEffect(() => {
    if (isLoggedIn) {
      const fetchPetDetails = async () => {
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
        } catch (e) {
          console.error("Error while fetching single pet details", e.message);
        }
      };
      fetchPetDetails();
    }
  });

  return (
    <div className="bg-[#FEFFC0]">
      <div className="m-4">
        <SectionHeading heading="PETFOLIO" styles="text-[4rem] text-center" />
        <div
          className="bg-[#EEF3FF] p-6 rounded-lg shadow-md flex justify-center flex-col border-t border-l border-black border-r border-b"
          style={{
            borderRight: "8px solid #F8AA26",
            borderBottom: "8px solid #F8AA26",
          }}
        >
          {user.id === petData.ownerId && (
            <div className="mb-4 flex justify-center">
              <UpdatePetButton />
              <OpenPetButton petId={petData.id} />
              <DeletePetButton petId={petData.id} />
            </div>
          )}
          <div className="mb-4 flex justify-center">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="flex justify-center flex-col items-center">
            <p>
              <span className="font-bold">NAME:</span> {petData.name}
            </p>
            <p>
              <span className="font-bold">AGE:</span> {petData.age} Years
            </p>
            <p>
              <span className="font-bold">TYPE:</span> {petData.type}
            </p>
            <p>
              <span className="font-bold">GENDER:</span> {petData.gender}
            </p>
            <p>
              <span className="font-bold">FROM:</span> 15-01-2000
            </p>
            <p>
              <span className="font-bold">TO:</span> 25-01-2000
            </p>
            {/* <p><span className="font-bold">INTERESTS:</span> {petData.interests}</p> */}
            {/* <p><span className="font-bold">PRECAUTIONS:</span> {petData.precautions}</p> */}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="p-2 bg-[#0B0019] text-white rounded-3xl hover:opacity-80 focus:outline-none focus:ring focus:border-blue-300 w-36"
            >
              Adopt Now
            </button>
          </div>
        </div>
        <div className="bg-[#EEF3FF] mt-5 p-6 rounded-lg shadow-md border border-black">
          <h1 className="text-center text-2xl lg:text-4xl font-bold mb-4">
            PHOTO GALLERY
          </h1>
          <div className="flex flex-col md:flex-row md:justify-between">
            <img src={puppy1} alt="puppy" className="mb-4 md:mb-0 md:mr-4" />
            <img src={dog} alt="dog" className="mb-4 md:mb-0 md:mr-4" />
            <img src={puppy2} alt="puppy" />
          </div>
        </div>
        <p className="text-2xl text-center bg-[#0B0019] text-[#EEF3FF]">
          BREED:{" "}
          <span className="font-bold text-[#EAA124]">{petData.breed}</span>{" "}
        </p>
      </div>
    </div>
  );
}
