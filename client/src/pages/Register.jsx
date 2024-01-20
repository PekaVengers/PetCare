import { Form } from "react-router-dom";
import bgImage from "../assets/images/loginBg.png";
import logo from "../assets/images/petcareLogo.png";

// eslint-disable-next-line no-unused-vars
export async function action({params, request}) {
  const formData = await request.formData();
  const name = formData.get("name");
  const location = formData.get("location");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  console.log("submitting", name, location, email, password, confirmPassword);
  return null;
}

export default function Register() {
  return (
    <div className="w-full h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center gap-[1rem] border-2 border-black" style={{background: `url(${bgImage})`}}>
      <img src={logo} alt="logo" className="w-[400px] h-auto"/>
      <Form method="POST" className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md bg-[#080909]">
        <input required className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none" type="text" name="name" placeholder="Name"/>
        <input required className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none" type="email" name="email" placeholder="Email"/>
        <input required className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none" type="text" name="location" placeholder="Location"/>
        <input required className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none" type="password" name="password" placeholder="Password"/>
        <input required className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none" type="password" name="confirmPassword" placeholder="Confirm Password"/>
        <button type="submit" className="w-full p-2 bg-[#f8aa26] text-[#080909] rounded-md hover:opacity-[0.8] hover:text-[#080909] uppercase font-semibold">Register</button>
      </Form>
    </div>
  )
}
