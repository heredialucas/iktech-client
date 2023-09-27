import ButtonProps from "../../interfaces/Button/ButtonInterface";

export const Button = ({ className, onClick, textContent}: ButtonProps) => {
  return (
    <a onClick={onClick} href="#" className={className}>
      {textContent}
    </a>
  );
};
