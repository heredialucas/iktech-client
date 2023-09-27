import { SectionStyles } from "../../styles/Section/Section";
import SectionInterface from "../../interfaces/Section/SectionInterface";

export const Section = ({ content, onClick, title}: SectionInterface) => {
  return (
    <section onClick={onClick} className={SectionStyles}>
      <h1 className="text-3xl   pt-10 pb-2">{title}</h1>
      <hr className="text-gray-500" />
      <p className="text-lg py-5">{content}</p>
    </section>
  );
};
