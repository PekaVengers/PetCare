/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import avatar from "../assets/images/avatar.png";
import { deletePetHandler } from "../utils/profilePageHelpers";

const ProfilePetsList = ({
  id,
  profile,
  petName,
  petType,
  petBreed,
  petAge,
  toast,
}) => {
  const navigate = useNavigate();
  const updatePetHandler = (petId) => {
    localStorage.setItem("updatePet", "true");
    localStorage.setItem("petId", petId);
    navigate("/add-pet");
  };

  return (
    <div className="rounded-[3rem] bg-[#F8AA26] relative pb-[0.5rem] pr-[0.5rem]">
      <div className="py-[1rem] px-[2rem] rounded-[3rem] bg-[#EEF3FF] border-t-2 border-l-2 border-[#0B0019] flex flex-col gap-[1.5rem] items-center">
        <div className="petDetails flex gap-[2rem] items-center">
          <img
            src={profile ? profile : avatar}
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
          <button
            className={`text-[1.2rem] uppercase font-bold px-[3rem] py-[0.5rem] font-primary text-white rounded-[2rem] hover:bg-[#DFE8FD] hover:text-[#0B0019] border-2 border-[#0B0019] bg-red-500 px-[1.5rem] py-[0.2rem]`}
            onClick={() => deletePetHandler(id, toast)}
          >
            Delete Pet
          </button>
          <button
            className={`text-[1.2rem] uppercase font-bold px-[3rem] py-[0.5rem] font-primary text-[#DFE8FD] rounded-[2rem] hover:bg-[#DFE8FD] hover:text-[#0B0019] border-2 border-[#0B0019] bg-[#F8AA26] px-[1.5rem] py-[0.2rem] text-black`}
            onClick={() => updatePetHandler(id)}
          >
            Update Pet
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePetsList;
