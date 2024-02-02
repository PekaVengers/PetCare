import SectionHeading from "../components/SectionHeading";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import PetBioCard from "../components/PetBioCard";
import { fetchPetDetails } from "../utils/fetchPetDetails";
import useOnline from "../hooks/useOnline";
import Offline from "../components/Offline";

export default function Petfolio() {
  const online = useOnline();
  const [loader, setLoader] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [petId, setPetId] = useState(useParams().petId);
  // const [adopterMessage, setAdopterMessage] = useState("");
  const [petDetails, setPetDetails] = useState({});
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
      setLoader(true);
      fetchPetDetails(petId, setPetDetails, toast);
      setIsAvailableForBorrow(petDetails.availableForBorrow);
      setLoader(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, petDetails.availableForBorrow, petId]);

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

  if (!online) {
    return <Offline />;
  }

  return (
    <>
      {petDetails ? (
        <div className="bg-[#FEFFC0] w-full min-h-screen">
          <main className="w-[80%] xl:w-[80%] 2xl:w-[60%] mt-[10rem] mb-[5rem] flex flex-col justify-center items-center mx-auto">
            <SectionHeading heading="Petfolio" styles="inline" />
            <PetBioCard
              petDetails={petDetails}
              petId={petId}
              toast={toast}
              availableForBorrow={availableForBorrow}
              setLoader={setLoader}
            />
            <h2 className="p-2 px-4 rounded-[1rem] text-[1.7rem] font-primary text-[#EAA124] bg-[#0B0019] overflow-auto max-w-[90%] ">
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
          heading="Error in fetching pet data..."
          styles="text-[3rem] inline"
        />
      )}
      <ToastContainer position="top-center" />
      {loader && <Loader />}
    </>
  );
}
