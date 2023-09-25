import ButtonProps from "../../interfaces/Button/ButtonInterface";

export const Button = ({ className, textContent }: ButtonProps) => {
  return (
    <a href="#" className={className}>
      {textContent}
    </a>
  );
};
