import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { petBreeds } from "../constants/config";
import { BASE_URL } from "../utils/BASE_URL";

export default function AddPet() {
  // eslint-disable-next-line no-unused-vars
  const [form, setForm] = useState({});
  const [profile, setProfile] = useState("");
  const [formOne, setFormOne] = useState(true);
  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);

  const [curType, setCurType] = useState("Cat");
  const petTypes = ["Cat", "Dog", "Rabbit"];

  function updateBreedOpts(event) {
    setCurType(event.target.value);
  }

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  // Toggle between first form and second form
  const toggleForm = () => {
    setFormOne(!formOne);
  };

  // Pet available for borrow or not handler
  const handleAvailability = (e) => {
    if (e.target.value === "Yes") {
      setIsAvailable(true);
    } else {
      setIsAvailable(false);
    }
  };

  // Profile picture handler
  const updateProfileDataChange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfile(reader.result);
      }
    };
  };

  // Form One submit handler
  const handleNextButtonSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("profile", profile);
    formData.forEach((value, key) => {
      if (key === "image") {
        return;
      }
      if (key === "availableForBorrow") {
        if (value === "Yes") {
          form[key] = "true";
        } else {
          form[key] = "false";
        }
        return;
      }
      form[key] = value;
    });
    toggleForm();
  };

  // Second form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.forEach((value, key) => {
      if (key == "yob") {
        form["petAge"] = "" + new Date().getFullYear() - value;
        return;
      }
      form[key] = value;
    });
    const bodyData = Object.fromEntries(
      Object.entries(form).filter(([, value]) => value)
    );

    console.log(bodyData);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          accesstoken: token,
        },
        body: JSON.stringify({ ...bodyData }),
      });
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.error("Error in posting data to server: ", e.message);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FEFFC0] flex flex-col justify-center items-center gap-[1rem] pt-[8rem] pb-[5rem]">
      <SectionHeading heading="Add Pet" styles="text-[4rem]" />
      {formOne ? (
        <form
          onSubmit={handleNextButtonSubmit}
          id="formOne"
          className="max-w-md mx-auto px-[3rem] py-[2rem] shadow-md rounded-[1rem] bg-[#15022DCC] text-[#0B0019] font-semibold font-primary"
        >
          <input
            required
            type="text"
            name="petName"
            placeholder="Name"
            className="mb-4 w-full p-2 rounded-md outline-none bg-[#fefefe] outline-none text-[#0B0019]"
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
              name="petType"
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
              name="petBreed"
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
              name="petGender"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="availableForBorrow" className="text-[#fefefe]">
              Available for Borrow
            </label>
            <select
              className="mb-4 w-full p-2 rounded-md outline-none  bg-[#fefefe] outline-none text-[#0B0019]"
              name="availableForBorrow"
              onChange={handleAvailability}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {isAvailable ? (
            <>
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
            </>
          ) : (
            ""
          )}

          <button
            type="submit"
            className="w-full p-2 bg-[#f8aa26] text-[#0B0019] rounded-md hover:text-[#080909] uppercase font-semibold hover:bg-[#fefefe]"
          >{`Next Page >`}</button>
        </form>
      ) : (
        <form
          id="formTwo"
          onSubmit={handleSubmit}
          className="max-w-md mx-auto px-[3rem] py-[2rem] shadow-md rounded-[1rem] bg-[#15022DCC] text-[#0B0019] font-semibold font-primary"
        >
          <div>
            <input
              required
              title="Please enter a 4-digit year."
              className="mb-4 w-full p-2 rounded-md outline-none bg-[#fefefe] outline-none text-[#0B0019]"
              type="number"
              name="yob"
              placeholder="Year of Birth"
              pattern="\d{4}"
              min={2000}
              max={new Date().getFullYear()}
            />
          </div>

          <div>
            <textarea
              className="bg-[#fefefe] outline-none rounded-md p-2 mb-2"
              placeholder="Precautions"
              required
              name="petPrecautions"
              cols="34"
              rows="2"
            ></textarea>
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
        </form>
      )}
    </div>
  );
}
