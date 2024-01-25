import { Form } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
export async function action({ params, request }) {
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
    <div className="w-full h-screen bg-[#FEFFC0] flex flex-col justify-center items-center gap-[1rem]">
      <Form
        method="POST"
        className="max-w-md mx-auto px-[3rem] py-[2rem] shadow-md rounded-[1rem] bg-[#bbdafa] text-[#0B0019] font-semibold font-primary"
      >
        <label className="block mb-2" htmlFor="name">
          Name
        </label>
        <input
          required
          className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none bg-[#0B0019] text-[#EEF3FF]"
          type="text"
          name="name"
          id="name"
        />

        <label className="block mb-2" htmlFor="email">
          Email
        </label>
        <input
          required
          className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none bg-[#0B0019] text-[#EEF3FF]"
          type="email"
          name="email"
          id="email"
        />

        <label className="block mb-2" htmlFor="location">
          Location
        </label>
        <input
          required
          className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none bg-[#0B0019] text-[#EEF3FF]"
          type="text"
          name="location"
          id="location"
        />

        <label className="block mb-2" htmlFor="password">
          Password
        </label>
        <input
          required
          className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none bg-[#0B0019] text-[#EEF3FF]"
          type="password"
          name="password"
          id="password"
        />

        <label className="block mb-2" htmlFor="confirmPassword">
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
          className="w-full p-2 bg-[#f8aa26] text-[#080909] rounded-md hover:text-[#FEFFC0] hover:bg-[#0B0019] uppercase font-semibold"
        >
          Register
        </button>
      </Form>
    </div>
  );
}
