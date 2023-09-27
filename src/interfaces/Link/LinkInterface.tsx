import { ReactNode } from "react";

export default interface LinkInterface {
  children?: ReactNode;
  childrenClassName?: string;
  className?: string;
  href: string;
  textContent: string;
}
