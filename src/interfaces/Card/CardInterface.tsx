export default interface CardInterface {
  nombre: string;
  precio: number;
  foto: string;
  referencia?: string;
  albumFotos: string[];
  btn?: boolean;
  handleClick?: (foto: string) => void;
}
