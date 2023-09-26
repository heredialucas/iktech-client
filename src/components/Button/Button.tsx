import ButtonProps from "../../interfaces/Button/ButtonInterface";

export const Button = ({ className, textContent, onClick }: ButtonProps) => {
  return (
    <a onClick={onClick} href="#" className={className}>
      {textContent}
    </a>
  );
};
