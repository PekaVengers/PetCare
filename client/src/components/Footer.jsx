import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


export default function Footer() {
  return (
    <footer className="flex justify-between px-[5rem] bg-[#0B0019] py-[1rem] text-[1.3rem] font-primary text-[#D6DFF4] font-semibold">
    <span>&copy; 2023 PetCare | All Rights Reserved </span>
    <ul className="footer flex gap-[1rem]">
      <div className="flex gap-[0.3rem] items-center">
        <FaGithub/>
        <a href="https://github.com/PekaVengers/PetCare">Github</a>
      </div>
      <div className="flex gap-[0.3rem] items-center"> 
        <MdEmail/>
        <a href="mailto:pekavenger@gmail.com">E-mail</a>
      </div>
    </ul>
  </footer>
  )
}
