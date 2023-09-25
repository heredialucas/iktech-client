import HomeInterface from "../../interfaces/Home/HomeInterface";
export const Home = ({ className, children }: HomeInterface) => {
  return <main className={`${className}`}>{children}</main>;
};
