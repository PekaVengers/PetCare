import Banner from "../assets/images/banner2.png";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#FEFFC0] relative">
      <div className="bannerImage w-full">
     <img src={Banner} alt="banner_image" className="w-full h-full object-cover" />
      </div>
      <Hero/>
      <h1 className="uppercase font-primary mb-[2rem] text-[4rem] text-center font-semibold">Call To Action</h1>
      <CTA/>
      <h1 className="uppercase font-primary my-[2rem] text-[4rem] text-center font-semibold">Testimonial</h1>
      <Testimonial/>
    </div>
  )
}
