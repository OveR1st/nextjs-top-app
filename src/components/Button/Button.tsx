import React from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrowIcon.svg';

export const Button: React.FC<ButtonProps> = ({
  appearance,
  children,
  onClick,
  className,
  arrow = 'none',
  ...props
}): JSX.Element => {
  //   console.log('render Button');
  return (
    <button
      onClick={onClick}
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
