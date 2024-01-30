import SectionHeading from "../components/SectionHeading";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { BASE_URL } from "../utils/BASE_URL";
import { useParams } from "react-router-dom";
import DarkButton from "../components/buttons/DarkButton";

export default function Petfolio() {
  // eslint-disable-next-line no-unused-vars
  const [petId, setPetId] = useState(useParams().petId);
  const [adopterMessage, setAdopterMessage] = useState("");
  const [petDetails, setPetDetails] = useState({});
  const [dataFetched, setDataFetched] = useState(false);
  const { login } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [availableForBorrow, setIsAvailableForBorrow] = useState(false);

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
          setPetDetails(pet.pet);
          if (!pet.success) {
            alert("Pet Not Found!");
          }
          setDataFetched(true);
          setIsAvailableForBorrow(petDetails.availableForBorrow);
        } catch (e) {
          console.error("Error while fetching single pet details", e.message);
        }
      };
      fetchPetDetails();
    }
  }, [dataFetched, isLoggedIn, petDetails.availableForBorrow, petId]);

  // eslint-disable-next-line react/prop-types
  const OwnerDetails = ({ text, headingText, styles }) => (
    <h2
      className={`text-[1.7rem] font-primary text-[#0B0019] font-semibold text-center ${
        styles ? styles : ""
      }`}
    >
      {headingText ? headingText : `${localStorage.getItem(text)}`}
    </h2>
  );

  const adoptPet = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${BASE_URL}/adopt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accesstoken: token,
        },
        body: JSON.stringify({
          petId: petId,
          message: adopterMessage,
        }),
      });
      const data = await res.json();
      data.success && alert("Adoption Request Sent Successfully!");
    } catch (e) {
      console.error("Error while fetching single pet details", e.message);
    }
  };

  const onClickHandler = async () => {
    const message = await prompt("Enter a message for the pet owner: ");
    setAdopterMessage(message);
    adoptPet();
  };

  return (
    <>
      {dataFetched ? (
        <div className="bg-[#FEFFC0] w-full min-h-screen">
          <main className="w-[80%] xl:w-[80%] 2xl:w-[60%] mt-[10rem] mb-[5rem] flex flex-col justify-center items-center mx-auto">
            <SectionHeading heading="Petfolio" styles="inline" />
            <div className="rounded-[3rem] bg-[#F8AA26] relative pb-[0.5rem] pr-[0.5rem] mb-[1rem]">
              <div className="py-[1.5rem] px-[2rem] rounded-[3rem] bg-[#EEF3FF] border-t-2 border-l-2 border-[#0B0019] flex flex-col gap-[1rem] items-center">
                <div className="rounded-[50%] w-[6rem] h-[6rem] overflow-hidden rounded-[50%] border-2 border-[#0B0019]">
                  <img
                    src={petDetails?.profile?.url}
                    alt="pet_profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="petDetails flex gap-[2rem] items-center">
                  <div className="details text-[#0B0019] font-primary flex flex-col items-center">
                    <h1 className="petName uppercase font-bold text-[2.5rem] leading-[2.5rem]">
                      {petDetails.petName}
                    </h1>
                    <h2 className="dateRange font-semibold text-[1.5rem] opacity-[0.8]">
                      {`${petDetails.petAge} Years, ${petDetails.petGender}`}
                    </h2>
                    <h3 className="dateRange font-semibold text-[1.3rem] opacity-[0.7]">
                      {`${petDetails.petType}, ${petDetails.petBreed}`}
                    </h3>
                    {availableForBorrow && (
                      <h3 className="breed text-[1.2rem] opacity-[0.8]">
                        {`${petDetails.startDate
                          .slice(0, 10)
                          .split("-")
                          .join("/")} - ${petDetails.endDate
                          .slice(0, 10)
                          .split("-")
                          .join("/")}`}
                      </h3>
                    )}
                  </div>
                </div>
                <div className="buttons flex justify-between gap-[2rem]">
                  <DarkButton
                    buttonText="Update Pet"
                    styles="bg-[#F8AA26] text-[1rem] px-[2.5rem] py-[0.2rem] text-black"
                  />
                  {availableForBorrow ? (
                    <DarkButton
                      buttonText="Adopt Now"
                      styles="text-[1rem] px-[2.5rem] py-[0.2rem]"
                      onclick={onClickHandler}
                    />
                  ) : null}
                </div>
              </div>
            </div>
            <h2 className="p-2 px-4 rounded-[1rem] text-[1.7rem] font-primary text-[#EAA124] bg-[#0B0019]">
              <strong className="font-semibold uppercase text-[#EEF3FF]">
                {"Precautions: "}
              </strong>
              {petDetails.petPrecautions}
            </h2>
            <SectionHeading
              heading="Owner Details"
              styles="inline mt-8 text-[4rem]"
            />
            <div className="flex flex-col items-center gap-2 w-[80%]">
              <OwnerDetails text="name" />
              <OwnerDetails text="location" />
              <OwnerDetails text="phoneNo" />
              <OwnerDetails text="email" />
              <OwnerDetails
                text="name"
                headingText={petDetails.ownerMessage}
                styles="w-[60%]"
              />
            </div>
          </main>
        </div>
      ) : (
        <SectionHeading
          heading="Login to continue..."
          styles="text-[4rem] inline"
        />
      )}
    </>
  );
}
