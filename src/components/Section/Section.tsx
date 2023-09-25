import SectionInterface from "../../interfaces/Section/SectionInterface";

export const Section = ({ title, content }: SectionInterface) => {
  return (
    <section className="w-full">
      <h1 className="text-3xl text-gray-500 px-5 pt-10 pb-5">{title}</h1>
      <hr className="text-gray-500" />
      <p className="text-lg text-gray-400 py-5">{content}</p>
    </section>
  );
};
