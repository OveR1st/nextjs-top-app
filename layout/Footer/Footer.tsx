import React from 'react';
import cn from 'classnames';

import { FooterProps } from './Footer.props';
import styles from './Button.module.css';

export const Footer: React.FC<FooterProps> = ({ ...props }): JSX.Element => {
  return <div {...props}>Footer</div>;
};
