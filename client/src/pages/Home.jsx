import Banner from "../assets/images/banner2.png";
import Hero from "../components/homepage/Hero";
import CTA from "../components/homepage/CTA";
import Testimonial from "../components/homepage/Testimonial";
import useOnline from "../hooks/useOnline";
import Offline from "../components/Offline"

export default function Home() {
  const online = useOnline();
  if (!online) {
    return <Offline />;
  }
  return (
    <div className="w-full min-h-screen bg-[#FEFFC0] relative">
      <div className="w-full">
        <img
          src={Banner}
          alt="banner_image"
          className="w-full h-full object-cover"
        />
      </div>
      <main className="xl:w-[80%] 2xl:w-[60%] m-auto">
        <h1 className="uppercase font-primary text-[4rem] text-center font-semibold mt-[5rem]">
          Our Vision
        </h1>
        <Hero />
        <h1 className="uppercase font-primary mb-[2rem] text-[4rem] text-center font-semibold">
          Call To Action
        </h1>
        <CTA />
        <h1 className="uppercase font-primary my-[2rem] text-[4rem] text-center font-semibold">
          Testimonial
        </h1>
        <Testimonial />
      </main>
    </div>
  );
}
