import { useEffect, useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";

export async function action({params, request}) {
  const formData = await request.formData();
  const petId = formData.get("pet-id");
  const message = formData.get("borrow-message");
  console.log("form-submission", petId, message);
  return {"status": "success"};
}

export default function BorrowCard({id, name, type, breed, from, to }) {
  const [showBorrowForm, setShowBorrowForm] = useState(false);
  const navigation = useNavigation();
  const actionData = useActionData();

  useEffect(() => {
    if (actionData && navigation.state == "idle") {
      setShowBorrowForm(false);
    }
  }, [navigation.state, actionData])

  return (
    <div className="border p-4 my-4 rounded-md bg-white shadow-md">
      <div className="mb-2">Name - {name}</div>
      <div className="mb-2">Type - {type}</div>
      <div className="mb-2">Breed - {breed}</div>
      <div className="mb-2">From - {from}</div>
      <div className="mb-2">To - {to}</div>
      {!showBorrowForm && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setShowBorrowForm(true)}
        >
          Request for borrow
        </button>
      )}
      {showBorrowForm && (
        <Form action="/pets" method="POST" className="mt-4">
          <input type="hidden" name="pet-id" value={id} />
          <textarea
            name="borrow-message"
            className="w-full p-2 border border-gray-300 rounded-md"
            cols="30"
            rows="10"
            placeholder="Enter your borrow message"
          ></textarea>
          <div className="mt-2">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Apply
            </button>
            <button
              onClick={() => setShowBorrowForm(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </Form>
      )}
    </div>
  );
}
