import CardInterface from "../Card/CardInterface";

export default interface ListCardInterface {
  btn?: boolean;
  cards: CardInterface[];
  className?: string;
  classNameTitle?: string;
  onClick?: () => void;
  title: string;
  underline?: boolean;
}
