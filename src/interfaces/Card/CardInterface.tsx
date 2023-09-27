export default interface CardInterface {
  albumFotos: string[];
  btn?: boolean;
  foto: string;
  handleClick?: (foto: string) => void;
  nombre: string;
  precio: number;
  referencia?: string;
}
