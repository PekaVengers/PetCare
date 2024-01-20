import BorrowCard from "../components/BorrowCard";

export default function BorrowList() {
  const pets = [
    {
      id: 1,
      name: "tommy",
      type: "dog",
      breed: "breed 1",
      precautions: "these are the precatuions",
      interests: "these are the interests of the dog",
      from: "12-12-2023",
      to: "20-12-2023",
    },
    {
      id: 2,
      name: "catty",
      type: "cat",
      breed: "cat 1",
      precautions: "these are the precatuions of the cat",
      interests: "these are the interests of the new cat",
      from: "21-12-2023",
      to: "28-12-2023",
    },
  ];
  return (
    <div>
      <div className="pets">
        {
          pets.map(({ id, name, type, from, to }) => (
            <BorrowCard key={id} name={name} type={type} from={from} to={to} />
          ))
        }
      </div>
    </div>
  )
}