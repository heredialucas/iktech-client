import { FaChevronRight } from "react-icons/fa";

export const Input = () => {
  return (
    <div className="flex items-center">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-xs text-sm focus:outline-none"
        placeholder="BUSCAR"
        required
        type="text"
      />
      <FaChevronRight className="absolute right-2  text-xs border-gray-300 border-l-0 h-10" />
    </div>
  );
};
