import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/images/avatar.png";
import DarkButton from "../components/pets/DarkButton";
import AddPetButton from "../components/pets/DarkButton";
import SectionHeading from "../components/SectionHeading";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/BASE_URL";
import { useAuth } from "../contexts/AuthContext";
import Loader from "../components/Loader"

export default function Profile() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [pets, setPets] = useState([]);

  const { isLoggedIn, login } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") && localStorage.getItem("token")) {
      login();
    }
  }, [login]);

  // set initial values of user state variables from localStorage
  useEffect(() => {
    if (isLoggedIn) {
      setUsername(localStorage.getItem("name"));
      setUserLocation(localStorage.getItem("location"));
      setPhoneNo(localStorage.getItem("phoneNo"));
      setEmail(localStorage.getItem("email"));
    }
  }, [isLoggedIn]);

  // load user's pets initially on first render
  useEffect(() => {
    if (isLoggedIn) {
      const getUserPets = async () => {
        setLoader(true);
        const token = localStorage.getItem("token");
        try {
          const response = await fetch(BASE_URL + "/user/pets", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              accesstoken: token,
            },
          });
          const data = await response.json();
          setPets(data.pets);
        } catch (error) {
          console.error("Error during users pets request:", error);
        }
        setLoader(false);
      };
      getUserPets();
    }
  }, [isLoggedIn]);

  // If user is not logged in then early return
  if (!isLoggedIn) {
    return (
      <SectionHeading
        heading="login to continue."
        styles="text-center"
      ></SectionHeading>
    );
  }

  const updatePetHandler = (petId) => {
    localStorage.setItem("updatePet", "true");
    localStorage.setItem("petId", petId);
    navigate("/add-pet");
  };

  return (
    <>
    {
      loader && <Loader/>
    }
      {pets && (
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
                    {`${userLocation}`}
                  </h2>
                  <h3 className="dateRange font-semibold text-[1.3rem]">
                    {`+91 ${phoneNo}`}
                  </h3>
                  <h3 className="breed text-[1.3rem]">{email}</h3>
                </div>
              </div>
            </div>
          </div>
          <h2 className="relative text-[4rem] font-primary uppercase font-bold my-[1rem]">
            Your Pets
          </h2>
          <Link to="/add-pet">
            <AddPetButton buttonText="Add your pet" />
          </Link>
          <div className="pets mt-[2rem] w-[70%] flex flex-wrap justify-center gap-x-[2rem] gap-y-[3rem]">
            {pets.map(({ _id, petName, petType, petBreed, petAge }) => (
              <>
                <div
                  key={_id}
                  className="rounded-[3rem] bg-[#F8AA26] relative pb-[0.5rem] pr-[0.5rem]"
                >
                  <div className="py-[1rem] px-[2rem] rounded-[3rem] bg-[#EEF3FF] border-t-2 border-l-2 border-[#0B0019] flex flex-col gap-[1.5rem] items-center">
                    <div className="petDetails flex gap-[2rem] items-center">
                      <img
                        src={avatar}
                        alt="pet_profile"
                        className="w-[6rem]"
                      />
                      <div className="details text-[#0B0019] font-primary flex flex-col ">
                        <h1 className="petName uppercase font-bold text-[2.5rem] leading-[2.5rem]">
                          {petName}
                        </h1>
                        <h3 className="breed text-[1.5rem]">{`${petType}, ${petBreed}`}</h3>
                        <h2 className="dateRange font-semibold text-[1.5rem]">
                          {`Age: ${petAge} Years`}
                        </h2>
                      </div>
                    </div>
                    <div className="buttons flex justify-between gap-[2rem]">
                      <DarkButton
                        buttonText="Delete Pet"
                        styles="bg-red-600 text-[1.2rem] px-[1.5rem] py-[0.2rem]"
                      />
                      <button
                        className={`text-[1.2rem] uppercase font-bold px-[3rem] py-[0.5rem] font-primary text-[#DFE8FD] rounded-[2rem] hover:bg-[#DFE8FD] hover:text-[#0B0019] border-2 border-[#0B0019] bg-[#F8AA26] px-[1.5rem] py-[0.2rem] text-black`}
                        onClick={()=>updatePetHandler(_id)}
                      >
                        Update Pet
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
