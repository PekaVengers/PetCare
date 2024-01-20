import { Form } from "react-router-dom";
import bgImage from "../assets/images/loginBg.png";

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
    <div className="w-full h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center border-2 border-black" style={{background: `url(${bgImage})`}}>
      <Form method="POST" className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md bg-gray-700">
        <input required className="mb-4 w-full p-2 border border-gray-300 rounded-md" type="text" name="name" placeholder="Name"/>
        <input required className="mb-4 w-full p-2 border border-gray-300 rounded-md" type="email" name="email" placeholder="Email"/>
        <input required className="mb-4 w-full p-2 border border-gray-300 rounded-md" type="text" name="location" placeholder="Location"/>
        <input required className="mb-4 w-full p-2 border border-gray-300 rounded-md" type="password" name="password" placeholder="Password"/>
        <input required className="mb-4 w-full p-2 border border-gray-300 rounded-md" type="password" name="confirmPassword" placeholder="Confirm Password"/>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">Register</button>
      </Form>
    </div>
  )
}
