import { Form, redirect } from "react-router-dom";
import bgImage from "../assets/images/loginBg.png";
import logo from "../assets/images/petcareLogo.png";
import { useState } from "react";
import SectionHeading from "../components/SectionHeading";

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
    //  style={{ background: `url(${bgImage})` }}
    <div className="w-full min-h-screen bg-[#FEFFC0] flex flex-col justify-center items-center gap-[1rem] pt-[8rem] pb-[5rem]">
      <SectionHeading heading="Add Pet" styles="text-[4rem]" />
      <Form method="POST" className="max-w-md mx-auto px-[3rem] py-[2rem] shadow-md rounded-[1rem] bg-[#15022DCC] text-white font-semibold font-primary">
        <input required className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none bg-[#0B0019] text-white" type="text" name="name" placeholder="Name" />
        <div className="relative">
          <input name="image" type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#0B0019] file:text-[#EEF3FF]" accept="image/png, image/jpeg" placeholder="Upload a image"/>
        </div>
        <div>
          <input required className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none bg-[#0B0019] text-white" type="text" name="age" placeholder="Age" />
        </div>
        <div>
          <select className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none text-slate-500 bg-[#0B0019] text-white" onChange={updateBreedOpts} name="type">
            {petTypes.map((petType) => (
              <option key={petType} value={petType}>{petType}</option>
            ))}
          </select>
        </div>

        <div>
          <select name="breed" className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none text-slate-500 bg-[#0B0019]">
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
          <textarea className="bg-[#0B0019]" placeholder="Bio" name="interests" cols="34" rows="5"></textarea>
        </div>
        <div>
        <input required className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none bg-[#0B0019]" type="text" name="Year of Birth" placeholder="Year of Birth" />
        </div>
        <button type="submit" className="w-full p-2 bg-[#f8aa26] text-[#080909] rounded-md hover:opacity-[0.8] hover:text-[#080909] uppercase font-semibold">Add Pet</button>
      </Form>
    </div>
  )
}
