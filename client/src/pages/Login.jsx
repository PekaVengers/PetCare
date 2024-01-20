import { Form } from "react-router-dom"
import bgImage from "../assets/images/loginBg.png";

export async function action({params, request}) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log("submitting", email, password);
  return null;
}

export default function Login() {
  return (
    <div className="w-full h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center border-2 border-black" style={{background: `url(${bgImage})`}} >
      <Form method="POST" className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md bg-gray-800">
        <input required className="mb-4 w-full p-2 border border-gray-300 rounded-md" type="email" name="email" placeholder="Email"/>
        <input required className="mb-4 w-full p-2 border border-gray-300 rounded-md" type="password" name="password" placeholder="Password"/>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">Register</button>
      </Form>

    </div>
  )
}
