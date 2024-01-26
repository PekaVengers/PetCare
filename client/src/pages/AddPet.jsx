import { Form, redirect } from "react-router-dom";
import { useState } from "react";
import SectionHeading from "../components/SectionHeading";

export async function action({request}) {
  const formData = await request.formData();
  console.log(formData);
}

export default function AddPet() {
  const [curType, setCurType] = useState("Cat");
  const petTypes = ["Cat", "Dog", "Rabbit"];
  const petBreeds = {
    "Cat": [
      "Ragdoll", "Sphynx","Maine Coone", "Abyssinian",
    ],
    "Dog": [
      "Labrador", "Husky", "Bulldog","Poodle", "German Shepherd",,
    ],
    "Rabbit": [
      "Mini Lop", "Rex", "Lionhead",
    ],
  };

  function updateBreedOpts(event) {
    setCurType(event.target.value);
  }

  return (
    <div className="w-full min-h-screen bg-[#FEFFC0] flex flex-col justify-center items-center gap-[1rem] pt-[8rem] pb-[5rem]">
      <SectionHeading heading="Add Pet" styles="text-[4rem]" />
      <Form method="POST" className="max-w-md mx-auto px-[3rem] py-[2rem] shadow-md rounded-[1rem] bg-[#15022DCC] text-white font-semibold font-primary">
        <input required className="mb-4 w-full p-2 rounded-md outline-none bg-[#0B0019] outline-none text-white" type="text" name="name" placeholder="Name" />
        <div className="relative mb-4">
          <input required name="image" type="file" className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#0B0019] outline-none file:text-[#EEF3FF]" accept="image/png, image/jpeg" placeholder="Upload a image"/>
        </div>
        <div>
          <select className="mb-4 w-full p-2 rounded-md outline-none text-slate-500 bg-[#0B0019] outline-none text-white" onChange={updateBreedOpts} name="type">
            {petTypes.map((petType) => (
              <option key={petType} value={petType}>{petType}</option>
            ))}
          </select>
        </div>

        <div>
          <select name="breed" className="mb-4 w-full p-2 rounded-md outline-none text-slate-200 bg-[#0B0019] outline-none">
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
        <input required className="mb-4 w-full p-2 rounded-md outline-none bg-[#0B0019] outline-none" type="text" name="Year of Birth" placeholder="Year of Birth"  pattern="\d{4}" title="Please enter a 4-digit year."/>
        </div>

        <div>
          <textarea className="bg-[#0B0019] outline-none rounded-md p-2 mb-2" placeholder="Bio [Optional]" name="interests" cols="34" rows="3"></textarea>
        </div>

        <div>
          <textarea className="bg-[#0B0019] outline-none rounded-md p-2 mb-4" placeholder="Owner's Message [Optional]" name="interests" cols="34" rows="3"></textarea>
        </div>

        <button type="submit" className="w-full p-2 bg-[#f8aa26] text-[#0B0019] rounded-md hover:opacity-[0.8] hover:text-[#080909] uppercase font-semibold">{`Next Page >`}</button>
      </Form>
    </div>
  )
}
