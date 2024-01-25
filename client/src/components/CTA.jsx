import DarkButton from "./buttons/DarkButton";
import LightButton from "./buttons/LightButton";

const CTA = () => {
  return (
    <div className="w-full flex font-primary">
      <div className="left w-[50%] bg-[#DFE8FD] flex flex-col justify-center items-center gap-[2rem] border-r-2 border-black py-[3rem]">
        <h1 className="w-[60%] font-medium text-center text-[2.5rem]">
        Want to adopt a pet today?
        <br/>
        Go Ahead!
        </h1>
        <DarkButton buttonText="Adopt Pet"/>
      </div>

      <div className="right w-[50%] bg-[#F8AA26] flex flex-col justify-center items-center gap-[2rem] border-black py-[3rem]">
        <h1 className="w-[60%] font-medium text-center text-[2.5rem]">
        Want to lend a pet today?
        <br/>
        Go Ahead!
        </h1>
        <LightButton buttonText="HEHE" className="bg-red-700"/>
      </div>
    </div>
  )
}

export default CTA;
