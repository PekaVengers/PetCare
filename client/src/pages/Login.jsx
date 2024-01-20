import { Form } from "react-router-dom";
import bgImage from "../assets/images/loginBg.png";
import logo from "../assets/images/petcareLogo.png";

// eslint-disable-next-line no-unused-vars
export async function action({ params, request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log("submitting", email, password);
  return null;
}

export default function Login() {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center border-2 border-black"
      style={{ background: `url(${bgImage})` }}
    >
      <img src={logo} alt="logo" className="w-[400px] h-auto" />
      <Form
        method="POST"
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md bg-[#080909] text-black"
      >
        <input
          required
          className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          required
          className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button
          type="submit"
          className="w-full p-2 bg-[#f8aa26] text-[#080909] rounded-md hover:opacity-[0.8] hover:text-[#080909] uppercase font-bold"
        >
          Login
        </button>
      </Form>
    </div>
  );
}
