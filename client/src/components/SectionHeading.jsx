import dogPaw from "../assets/images/dogPaw.png";

const SectionHeading = (props) => {
  // eslint-disable-next-line react/prop-types
  const { heading, styles } = props;
  return (
    <h1
      className={`relative text-[6rem] font-primary uppercase font-bold my-[1rem] ${
        styles ? styles : ""
      }`}
    >
      {heading}{" "}
      <img
        src={dogPaw}
        alt="dogPaw"
        className="w-[5rem] absolute top-[-0.5rem] right-[-2.5rem] rotate-[30deg]"
      />
    </h1>
  );
};

export default SectionHeading;
