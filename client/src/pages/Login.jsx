import SectionHeading from "../components/SectionHeading";
import { BASE_URL } from "../utils/BASE_URL";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line no-unused-vars, react-refresh/only-export-components
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      if (data.success) {
        // Update authentication state upon successful login
        login();
        localStorage.setItem('token', data.token);
        localStorage.setItem('name', data.user.name);
        localStorage.setItem('email', data.user.email);
        localStorage.setItem('location', data.user.location);
        localStorage.setItem("phoneNo", data.user.phoneNo);
        navigate("/profile");
      } else {
        alert('Invalid email or password!');
      }
    } catch (error) {
      console.error('Error during login request:', error);
    }
  };

return (
    <div className="w-full h-screen bg-[#FEFFC0] flex flex-col justify-center items-center">
      <SectionHeading heading="Login" styles="text-[4rem]" />
      <form
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
          onClick={handleLoginSubmit}
          className="w-full p-2 bg-[#bbdafa] text-[#080909] text-[1.5rem] rounded-md hover:text-[#FEFFC0] hover:bg-[#0B0019] uppercase font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
