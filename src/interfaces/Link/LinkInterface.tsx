import { ReactNode } from "react";

export default interface LinkInterface {
  className?: string;
  children?: ReactNode;
  childrenClassName?: string;
  href: string;
  textContent: string;
}
