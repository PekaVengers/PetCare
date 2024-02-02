import { BASE_URL } from "../utils/BASE_URL";
import isStrongPassword from "../utils/isStrongPassword";
import { Form, useNavigate } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { ToastContainer, toast } from "react-toastify";

// eslint-disable-next-line no-unused-vars, react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const phoneNo = formData.get("phoneNo");
  const location = formData.get("location");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (!isStrongPassword(password)) {
    console.error("Please enter a strong password.");
  } else if (password !== confirmPassword) {
    console.error("Passwords do not match!");
  } else {
    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phoneNo: phoneNo,
          password: password,
          location: location,
        }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Registration successful!");
      }
      console.log("Register response:", data);
    } catch (error) {
      console.error("Error during register request:", error);
    }
  }
  return null;
}

export default function Register() {
  return (
    <>
      <div className="w-full min-h-screen bg-[#FEFFC0] flex flex-col justify-center items-center gap-[1rem] pt-[8rem] pb-[5rem]">
        <SectionHeading heading="Register" styles="text-[4rem]" />
        <Form
          method="post"
          className="max-w-md mx-auto px-[3rem] py-[2rem] shadow-md rounded-[1rem] bg-[#bbdafa] text-[#0B0019] font-semibold font-primary"
        >
          <label className="block mb-2 text-[1.5rem]" htmlFor="name">
            Name
          </label>
          <input
            required
            className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none bg-[#0B0019] text-[#EEF3FF]"
            type="text"
            name="name"
            id="name"
          />

          <label className="block mb-2 text-[1.5rem]" htmlFor="email">
            Email
          </label>
          <input
            required
            className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none bg-[#0B0019] text-[#EEF3FF]"
            type="email"
            name="email"
            id="email"
          />

          <label className="block mb-2 text-[1.5rem]" htmlFor="phoneNo">
            Phone Number
          </label>
          <input
            required
            className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none bg-[#0B0019] text-[#EEF3FF]"
            type="tel"
            name="phoneNo"
            id="phoneNo"
          />

          <label className="block mb-2 text-[1.5rem]" htmlFor="location">
            Location
          </label>
          <input
            required
            className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none bg-[#0B0019] text-[#EEF3FF]"
            type="text"
            name="location"
            id="location"
          />

          <label className="block mb-2 text-[1.5rem]" htmlFor="password">
            Password
          </label>
          <input
            required
            className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none bg-[#0B0019] text-[#EEF3FF]"
            type="password"
            name="password"
            id="password"
          />

          <label className="block mb-2 text-[1.5rem]" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            required
            className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none bg-[#0B0019] text-[#EEF3FF]"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
          />
          <button
            type="submit"
            className="w-full p-2 bg-[#f8aa26] text-[#080909] text-[1.5rem] rounded-md hover:text-[#FEFFC0] hover:bg-[#0B0019] uppercase font-semibold"
          >
            Register
          </button>
        </Form>
      </div>
      <ToastContainer position="top-center" />
    </>
  );
}
