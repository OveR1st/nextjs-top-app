import React from 'react';
import cn from 'classnames';

import { SidebarProps } from './Sidebar.props';
import styles from './Button.module.css';

export const Sidebar: React.FC<SidebarProps> = ({ ...props }): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};
