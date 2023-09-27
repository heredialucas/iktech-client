import { FooterLinks } from "./FooterLinks";
import { FooterSocialMedia } from "./FooterSocialMedia";
import FotterImg from "../../assets/footer.png";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-5 my-5">
      <FooterSocialMedia />
      <FooterLinks />
      <img src={FotterImg} alt="footer" className="w-full" />
    </footer>
  );
};
