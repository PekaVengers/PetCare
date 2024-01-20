import { Form } from "react-router-dom"

export async function action({params, request}) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log("submitting", email, password);
  return null;
}

export default function Login() {
  return (
    <div>
      <Form method="POST" className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
        <input required className="mb-4 w-full p-2 border border-gray-300 rounded-md" type="email" name="email" placeholder="Email"/>
        <input required className="mb-4 w-full p-2 border border-gray-300 rounded-md" type="password" name="password" placeholder="Password"/>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">Register</button>
      </Form>

    </div>
  )
}
