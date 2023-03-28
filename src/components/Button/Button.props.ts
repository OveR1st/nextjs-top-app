import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLProps,
  ReactNode,
} from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance: 'primary' | 'ghost';
}
// export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
//   children: ReactNode;
//   appearance: 'primary' | 'ghost';
// }
