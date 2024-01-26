import DarkButton from "./DarkButton";
import YellowButton from "./YellowButton";
import avatar from "../../assets/images/avatar.png";

const PetCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { petName, category, breed, startDate, endDate } = props;
  return (
    <div className="rounded-[3rem] bg-[#F8AA26] relative pb-[0.5rem] pr-[0.5rem]">
      <div className="py-[2rem] px-[3rem] rounded-[3rem] bg-[#EEF3FF] border-t-2 border-l-2 border-[#0B0019] flex flex-col gap-[3rem] items-center">
        <div className="petDetails flex gap-[2rem] items-center">
          <img src={avatar} alt="pet_profile" className="w-[8rem]" />
          <div className="details text-[#0B0019] font-primary flex flex-col ">
            <h1 className="petName uppercase font-bold text-[3rem] leading-[2.5rem]">
              {petName}
            </h1>
            <h3 className="breed text-[2rem]">{`${category}, ${breed}`}</h3>
            <h2 className="dateRange font-semibold text-[1.5rem]">
              {`${startDate} - ${endDate}`}
            </h2>
          </div>
        </div>
        <div className="buttons flex justify-between gap-[3rem]">
          <DarkButton buttonText="More Details" />
          <YellowButton buttonText="Adopt Now" />
        </div>
      </div>
    </div>
  );
};

export default PetCard;
