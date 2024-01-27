import Banner from "../assets/images/banner2.png";
import Hero from "../components/homepage/Hero";
import CTA from "../components/homepage/CTA";
import Testimonial from "../components/homepage/Testimonial";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#FEFFC0] relative">
      <div className="bannerImage w-full">
     <img src={Banner} alt="banner_image" className="w-full h-full object-cover" />
      </div>
      <h1 className="uppercase font-primary text-[4rem] text-center font-semibold mt-[5rem]">Our Vision</h1>
      <Hero/>
      <h1 className="uppercase font-primary mb-[2rem] text-[4rem] text-center font-semibold">Call To Action</h1>
      <CTA/>
      <h1 className="uppercase font-primary my-[2rem] text-[4rem] text-center font-semibold">Testimonial</h1>
      <Testimonial/>
    </div>
  )
}
