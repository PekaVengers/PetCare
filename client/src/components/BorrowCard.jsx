export default function BorrowCard({ name, type, breed, from, to }) {
  return (
    <div>
      <div id="name">Name - {name}</div>
      <div id="type">Type - {type}</div>
      <div id="breed">Breed - {breed}</div>
      <div id="from">From - {from}</div>
      <div id="to">To - {to}</div>
      <button>Request for borrow</button>
    </div>
  );
}
