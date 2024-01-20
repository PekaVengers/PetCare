import { Form, redirect } from "react-router-dom";
import bgImage from "../assets/images/loginBg.png";
import logo from "../assets/images/petcareLogo.png";
import { useState } from "react";

export async function action({params, request}) {
  const formData = await request.formData();
  const name = formData.get("name");
  const petType = formData.get("type");
  const breed = formData.get("breed");
  const interests = formData.get("interests");
  const precautions = formData.get("precautions");
  return redirect("/profile");
}

export default function () {
  const [curType, setCurType] = useState("cat");
  const petTypes = ["cat", "dog", "rabbit"];
  const petBreeds = {
    "cat": [
      "breed 1", "breed 2", "breed 3",
    ],
    "dog": [
      "dog 1", "dog 2", "dog 3",
    ],
    "rabbit": [
      "rabbit 1", "rabbit 2", "rabbit 3",
    ],
  };

  function updateBreedOpts(event) {
    setCurType(event.target.value);
  }

  return (
    <div className="w-full h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center gap-[1rem] border-2 border-black" style={{ background: `url(${bgImage})` }}>
      <img src={logo} alt="logo" className="w-[400px] h-auto" />
      <Form method="POST" className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md bg-[#080909]">
        <input required className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none" type="text" name="name" placeholder="Name" />
        <input type="file" />
        <div>

          <select onChange={updateBreedOpts} name="type">
            {petTypes.map((petType) => (
              <option key={petType} value={petType}>{petType}</option>
            ))}
          </select>
        </div>

        <div>
          <select name="breed">
            {curType ?
              petBreeds[curType].map((breed) => (
                <option key={breed} value={breed}>{breed}</option>
              ))
              :
              <option>Select a Type First</option>
            }
          </select>
        </div>

        <div>
          <textarea name="precautions" cols="30" rows="10"></textarea>
        </div>
        <div>
          <textarea name="interests" cols="30" rows="10"></textarea>
        </div>
        <button type="submit" className="w-full p-2 bg-[#f8aa26] text-[#080909] rounded-md hover:opacity-[0.8] hover:text-[#080909] uppercase font-semibold">Add Pet</button>
      </Form>
    </div>
  )
}
