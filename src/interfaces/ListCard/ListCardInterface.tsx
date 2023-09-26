import CardInterface from "../Card/CardInterface";

export default interface ListCardInterface {
  title: string;
  cards: CardInterface[];
  className?: string;
  classNameTitle?: string;
  underline?: boolean;
  btn?: boolean;
  onClick?: () => void;
}
