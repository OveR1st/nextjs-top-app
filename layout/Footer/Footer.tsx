import React from 'react';
import cn from 'classnames';
import { format } from 'date-fns';

import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';

export const Footer: React.FC<FooterProps> = ({
  className,
  ...props
}): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>OwlTop © 2023 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
