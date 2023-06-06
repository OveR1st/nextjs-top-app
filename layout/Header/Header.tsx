import React from 'react';
import cn from 'classnames';

import { HeaderProps } from './Header.props';
import styles from './Button.module.css';

export const Header: React.FC<HeaderProps> = ({ ...props }): JSX.Element => {
  return <div {...props}>Header</div>;
};
