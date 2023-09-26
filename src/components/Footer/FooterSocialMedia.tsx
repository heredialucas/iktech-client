import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";

export const FooterSocialMedia = () => {
  return (
    <div className="flex flex-col items-center gap-5 pt-5 pb-10 bg-gray-100 w-full">
      <h3 className="text-3xl text-gray-600 pt-5">@HUSHPUPPIESCO</h3>
      <hr className=" text-gray-600 w-36 border-1 border-gray-600 " />
      <div className="flex gap-3">
        <FaFacebookF className="text-gray-600 h-6 w-6" />
        <FaInstagramSquare className="text-gray-500 h-6 w-6" />
      </div>
    </div>
  );
};
