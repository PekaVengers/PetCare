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
    <div>
      <div id="name">Name - {name}</div>
      <div id="type">Type - {type}</div>
      <div id="breed">Breed - {breed}</div>
      <div id="from">From - {from}</div>
      <div id="to">To - {to}</div>
      {!showBorrowForm && <button onClick={() => setShowBorrowForm(true)}>Request for borrow</button>}
      { showBorrowForm && 
        <Form action="/pets" method="POST">
          <input type="hidden" name="pet-id" value={id} />
          <textarea name="borrow-message" id="" cols="30" rows="10"></textarea>
          <button type="submit">Apply</button>
          <button onClick={() => setShowBorrowForm(false)}>Cancel</button>
        </Form>
      }
    </div>
  );
}
