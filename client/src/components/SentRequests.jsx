/* eslint-disable react/prop-types */
import DarkButton from "./pets/DarkButton";

const SentRequests = ({ request }) => {
  return (
    <div className="sent px-8 py-4 rounded-[2rem] border-2 border-black flex flex-col items-center justify-center">
      <h2 className="relative text-[3rem] font-primary uppercase font-bold my-[1rem]">
        Sent Requests
      </h2>
      <div className="details">
        <h1 className="petName uppercase font-bold font-primary text-[2rem] leading-[2.5rem]">
          Name: {request?.petOwner?.name}
        </h1>
        <h1 className="petName uppercase font-bold font-primary text-[2rem] leading-[2.5rem]">
          Email: {request?.petOwner?.email}
        </h1>
        <div className="buttons flex w-full justify-center mt-4">
          <DarkButton buttonText="Delete" styles={"bg-yellow-500 text-black"} />
        </div>
      </div>
    </div>
  );
};

export default SentRequests;
