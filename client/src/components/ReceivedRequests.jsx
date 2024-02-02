/* eslint-disable react/prop-types */
import DarkButton from "./pets/DarkButton";
import { requestUpdateHandler } from "../utils/profilePageHelpers";

const ReceivedRequests = ({ request }) => {
  return (
    <div className="received px-8 py-4 rounded-[2rem] flex flex-col items-center justify-center border-2 border-black">
      <h2 className="relative text-[3rem] font-primary uppercase font-bold my-[1rem]">
        Received Requests
      </h2>
      <div className="details flex flex-col gap-2">
        <h1 className="petName uppercase font-bold font-primary text-[2rem] leading-[2.5rem]">
          Name: {request?.adopter?.name}
        </h1>
        <h1 className="petName uppercase font-bold font-primary text-[2rem] leading-[2.5rem]">
          Email: {request?.adopter?.email}
        </h1>
        <div className="buttons flex w-full justify-around mt-4">
          <DarkButton
            buttonText="Accept"
            styles={"bg-green-500 text-black"}
            onclick={() => requestUpdateHandler("accept")}
          />
          <DarkButton
            buttonText="Reject"
            styles={"bg-red-500"}
            onclick={() => requestUpdateHandler("reject")}
          />
        </div>
      </div>
    </div>
  );
};

export default ReceivedRequests;
