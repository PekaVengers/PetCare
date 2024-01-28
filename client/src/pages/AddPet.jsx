import { Form } from "react-router-dom";
import { useState } from "react";
import SectionHeading from "../components/SectionHeading";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  console.log(formData);
}

export default function AddPet() {
  const [profile, setProfile] = useState("");
  const [formOne, setFormOne] = useState(true);
  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState("");
  const [curType, setCurType] = useState("Cat");
  const petTypes = ["Cat", "Dog", "Rabbit"];
  const petBreeds = {
    Cat: [
      "Ragdoll",
      "Sphynx",
      "Maine Coon",
      "Abyssinian",
      "Siamese",
      "Persian",
      "British Shorthair",
    ],
    Dog: [
      "Labrador Retriever",
      "Husky",
      "Bulldog",
      "Poodle",
      "German Shepherd",
      "Golden Retriever",
      "Beagle",
    ],
    Rabbit: [
      "Mini Lop",
      "Rex",
      "Lionhead",
      "Flemish Giant",
      "Dutch",
      "Holland Lop",
      "English Angora",
    ],
    Fish: [
      "Goldfish",
      "Betta",
      "Angelfish",
      "Guppy",
      "Cichlid",
      "Tetra",
      "Molly",
    ],
    Bird: [
      "Parakeet",
      "Cockatiel",
      "Canary",
      "Finch",
      "Lovebird",
      "African Grey Parrot",
      "Cockatoo",
    ],
    Reptile: [
      "Ball Python",
      "Corn Snake",
      "Bearded Dragon",
      "Leopard Gecko",
      "Iguana",
      "Turtle",
      "Chameleon",
    ],
  };

  function updateBreedOpts(event) {
    setCurType(event.target.value);
  }

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const toggleForm = () => {
    setFormOne(!formOne);
  };

  const updateProfileDataChange = (e) => {

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        console.log(reader.result);
        setProfile(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]); 

};

  return (
    <div className="w-full min-h-screen bg-[#FEFFC0] flex flex-col justify-center items-center gap-[1rem] pt-[8rem] pb-[5rem]">
      <SectionHeading heading="Add Pet" styles="text-[4rem]" />
      <Form
        encType="multipart/form-data"
        method="POST"
        className="flex gap-4 flex-wrap items-stretch justify-stretch"
      >
        {formOne ? (
          <section
            id="formOne"
            className="max-w-md mx-auto px-[3rem] py-[2rem] shadow-md rounded-[1rem] bg-[#15022DCC] text-[#0B0019] font-semibold font-primary"
          >
            <input
              required
              className="mb-4 w-full p-2 rounded-md outline-none bg-[#fefefe] outline-none text-[#0B0019]"
              type="text"
              name="name"
              placeholder="Name"
            />
            <div className="relative mb-4">
              <input
                required
                name="image"
                type="file"
                accept="image/"
                id="file"
                onChange={updateProfileDataChange}
                className="block w-full text-sm text-[#0B0019] file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#fefefe] outline-none text-[#fefefe] file:text-[#0B0019]"
                placeholder="Upload a image"
              />
            </div>
            <div>
              <select
                className="mb-4 w-full p-2 rounded-md outline-none bg-[#fefefe] outline-none text-[#0B0019]"
                onChange={updateBreedOpts}
                name="type"
              >
                {petTypes.map((petType) => (
                  <option key={petType} value={petType}>
                    {petType}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                name="breed"
                className="mb-4 w-full p-2 rounded-md outline-none  bg-[#fefefe] outline-none text-[#0B0019]"
              >
                {curType ? (
                  petBreeds[curType].map((breed) => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))
                ) : (
                  <option>Select a Type First</option>
                )}
              </select>
            </div>

            <div>
              <select
                className="mb-4 w-full p-2 rounded-md outline-none  bg-[#fefefe] outline-none text-[#0B0019]"
                name="gender"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label htmlFor="startDate" className="text-[#fefefe]">
                From
              </label>
              <input
                name="startDate"
                type="date"
                max={endDate}
                onChange={handleStartDateChange}
                value={startDate}
                className="mb-4 w-full p-2 rounded-md outline-none  bg-[#fefefe] outline-none text-[#0B0019]"
              />
            </div>

            <div>
              <label htmlFor="endDate" className="text-[#fefefe]">
                To
              </label>
              <input
                name="endDate"
                type="date"
                onChange={handleEndDateChange}
                value={endDate}
                min={startDate}
                className="mb-4 w-full p-2 rounded-md outline-none  bg-[#fefefe] outline-none text-[#0B0019]"
              />
            </div>

            <button
              className="w-full p-2 bg-[#f8aa26] text-[#0B0019] rounded-md hover:text-[#080909] uppercase font-semibold hover:bg-[#fefefe]"
              onClick={toggleForm}
            >{`Next Page >`}</button>
          </section>
        ) : (
          <section
            id="formTwo"
            className="max-w-md mx-auto px-[3rem] py-[2rem] shadow-md rounded-[1rem] bg-[#15022DCC] text-[#0B0019] font-semibold font-primary"
          >
            <div>
              <input
                required
                className="mb-4 w-full p-2 rounded-md outline-none bg-[#fefefe] outline-none text-[#0B0019]"
                type="text"
                name="Year of Birth"
                placeholder="Year of Birth"
                pattern="\d{4}"
                title="Please enter a 4-digit year."
              />
            </div>

            <div>
              <label htmlFor="availability" className="text-[#fefefe]">
                Available for Borrow
              </label>
              <select
                className="mb-4 w-full p-2 rounded-md outline-none  bg-[#fefefe] outline-none text-[#0B0019]"
                name="availability"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <textarea
                className="bg-[#fefefe] outline-none rounded-md p-2 mb-2"
                placeholder="Bio [Optional]"
                name="bio"
                cols="34"
                rows="2"
              ></textarea>
            </div>

            <div>
              <textarea
                className="bg-[#fefefe] outline-none rounded-md p-2 mb-2"
                placeholder="Precautions"
                name="precautions"
                cols="34"
                rows="2"
              ></textarea>
            </div>

            <div>
              <textarea
                className="bg-[#fefefe] outline-none rounded-md p-2 mb-2"
                placeholder="Interests [Optional]"
                name="interests"
                cols="34"
                rows="2"
              ></textarea>
            </div>

            <div>
              <textarea
                className="bg-[#fefefe] outline-none rounded-md p-2 mb-2"
                placeholder="Owner's Message [Optional]"
                name="ownerMessage"
                cols="34"
                rows="2"
              ></textarea>
            </div>

            <button
              className="w-full p-2 bg-[#f8aa26] text-[#0B0019] rounded-md hover:text-[#080909] uppercase font-semibold mb-2 hover:bg-[#fefefe]"
              onClick={toggleForm}
            >{`< Prev Page`}</button>

            <button
              type="submit"
              className="w-full p-2 bg-[#fefefe] text-[#0B0019] rounded-md hover:text-[#080909] uppercase font-semibold hover:bg-[#f8aa26]"
            >{`Submit`}</button>
          </section>
        )}
        {/* 
          petName: 'Fluffy',
          profile: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          petType: 'Dog',
          petBreed: 'Golden Retriever',
          petGender: 'Female',
          startDate: '2024-01-20',
          endDate: '2024-01-25'
          petAge: '3',
          petBio: "A social pet with 2 years of experience",
          petInterests: 'Mai nahi bataunga',
          petPrecautions: 'Allergic to certain foods',
          ownerMessage: 'I am going to shimla, Please handle my pet with care' 
          */}
      </Form>
    </div>
  );
}
