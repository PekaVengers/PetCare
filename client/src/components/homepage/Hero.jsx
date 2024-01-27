import DogBlob from "../../assets/images/DoggyBlob.png";
import CatBlob from "../../assets/images/CatBlob.png";

const Hero = () => {
  return (
    <div className="w-full flex flex-col font-primary pb-[2rem]">
      <div className="dogpart w-[100%] flex justify-center items-center gap-[2rem]">
        <img src={DogBlob} alt="dog_image" className="w-[20rem]" />
        <h1 className="w-[60%] text-[4rem]"><span className="bg-[#0B0019] text-[#EEF3FF] px-[0.5rem] uppercase">!guau!</span>
        <br />
        <span className="bg-[#0B0019] text-[#EEF3FF] px-[0.5rem]">{`Adopt me, Buddy.`}</span>
        </h1>
      </div>
      <div className="catpart w-[100%] flex justify-center items-center gap-[2rem]">
        <h1 className="w-[60%] text-[4rem] text-right"><span className="bg-[#0B0019] text-[#EEF3FF] px-[0.5rem] uppercase">!Meow!</span>
        <br />
        <span className="bg-[#0B0019] text-[#EEF3FF] px-[0.5rem]">{`Let me care for you :)`}</span></h1>
        <img src={CatBlob} alt="cat_image" className="w-[20rem]" />
      </div>
    </div>
  )
}

export default Hero;
