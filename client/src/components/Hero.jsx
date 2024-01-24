import DogBlob from "../assets/images/DoggyBlob.png";
import CatBlob from "../assets/images/CatBlob.png";

const Hero = () => {
  return (
    <div className="w-full flex flex-col font-primary pb-[2rem]">
      <div className="dogpart w-[100%] flex justify-center items-center gap-[2rem]">
        <img src={DogBlob} alt="dog_image" className="w-[15rem]" />
        <h1 className="w-[60%] text-[4rem]">!GUAU!
        <br />
        How are you doing?</h1>
      </div>
      <div className="catpart w-[100%] flex justify-center items-center gap-[2rem]">
        <h1 className="w-[60%] text-[4rem] text-right">!MEOW!
        <br />
        How are you doing?</h1>
        <img src={CatBlob} alt="cat_image" className="w-[15rem]" />
      </div>
    </div>
  )
}

export default Hero;
