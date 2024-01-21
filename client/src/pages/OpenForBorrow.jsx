import { Form, redirect, useParams } from "react-router-dom";

export async function action({params, request}) {
  const formData = await request.formData();
  const from = formData.get("from");
  const to = formData.get("to");
  const message = formData.get("message");
  const petId = formData.get("petId");
  console.log(from, to, petId, message);
  return redirect("/profile");
}


export default function OpenForBorrow() {
  const {id} = useParams();

  return (
    <div className="max-w-md mx-auto p-4">
      <Form method="POST" className="bg-white shadow-md rounded-md p-6">
        <input type="hidden" name="petId" value={id} />
        <div className="mb-4">
          <label htmlFor="from" className="block text-gray-700 font-semibold mb-2">
            From:
          </label>
          <input
            type="text"
            name="from"
            className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="to" className="block text-gray-700 font-semibold mb-2">
            To:
          </label>
          <input
            type="text"
            name="to"
            className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message:
          </label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:opacity-80 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </Form>
    </div>
  )
}
