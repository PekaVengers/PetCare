import { Form } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { BASE_URL } from "../utils/BASE_URL";

// eslint-disable-next-line no-unused-vars, react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    });
    const data = await response.json();
    localStorage.setItem('token', data.token);
    console.log('Login response:', data);
  } catch (error) {
    console.error('Error during login request:', error);
  }
  return null;
}

export default function Login() {
  return (
    <div className="w-full h-screen bg-[#FEFFC0] flex flex-col justify-center items-center">
      <SectionHeading heading="Login" styles="text-[4rem]" />
      <Form
        method="POST"
        className="max-w-md mx-auto px-[3rem] py-[2rem] shadow-md rounded-[1rem] bg-[#f8aa26] text-[#0B0019] font-semibold font-primary"
      >
        <label className="block mb-2 text-[1.5rem]" htmlFor="email">
          Email
        </label>
        <input
          required
          className="mb-4 w-full p-2 rounded-md outline-none bg-[#0B0019] text-[#EEF3FF]"
          type="email"
          name="email"
          id="email"
        />
        <label className="block mb-2 text-[1.5rem]" htmlFor="password">
          Password
        </label>
        <input
          required
          className="mb-8 w-full p-2 rounded-md outline-none bg-[#0B0019] text-[#EEF3FF]"
          type="password"
          name="password"
          id="password"
        />
        <button
          type="submit"
          className="w-full p-2 bg-[#bbdafa] text-[#080909] text-[1.5rem] rounded-md hover:text-[#FEFFC0] hover:bg-[#0B0019] uppercase font-semibold"
        >
          Login
        </button>
      </Form>
    </div>
  );
}
