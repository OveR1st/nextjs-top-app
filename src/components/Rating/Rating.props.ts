import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IRatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating: number;
  isEditable?: boolean;
  setRating?: (rating: number) => void;
}
