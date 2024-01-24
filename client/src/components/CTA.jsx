const CTA = () => {
  return (
    <div className="w-full flex font-primary">
      <div className="left w-[50%] bg-[#DFE8FD] flex flex-col justify-center items-center gap-[2rem] border-r-2 border-black py-[3rem]">
        <h1 className="w-[60%] font-medium text-center text-[2.5rem]">
        Want to adopt a pet today?
        <br/>
        Go Ahead!
        </h1>
        <button className="text-[1.5rem] uppercase font-bold bg-[#0B0019] px-[3rem] py-[0.5rem] font-primary text-[#DFE8FD] rounded-[2rem] hover:bg-[#DFE8FD] hover:text-[#0B0019] border-2 border-[#0B0019]">Adopt Pet</button>
      </div>

      <div className="right w-[50%] bg-[#F8AA26] flex flex-col justify-center items-center gap-[2rem] border-black py-[3rem]">
        <h1 className="w-[60%] font-medium text-center text-[2.5rem]">
        Want to lend a pet today?
        <br/>
        Go Ahead!
        </h1>
        <button className="text-[1.5rem] uppercase font-bold bg-[#DFE8FD] px-[3rem] py-[0.5rem] font-primary text-[#0B0019] rounded-[2rem] hover:bg-[#0B0019] hover:text-[#DFE8FD] border-2 border-[#DFE8FD]">Lend Pet</button>
      </div>
    </div>
  )
}

export default CTA;
