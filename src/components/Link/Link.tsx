import LinkInterface from "../../interfaces/Link/LinkInterface";

export const Link = ({
  className,
  children,
  childrenClassName,
  href,
  textContent,
}: LinkInterface) => {
  return (
    <div className={`flex ${className}`}>
      <a href={href}>{textContent}</a>
      <div className={childrenClassName}>{children}</div>
    </div>
  );
};
