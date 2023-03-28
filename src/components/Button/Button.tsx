import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import { HTMLProps } from 'react';

export const Button: React.FC<HTMLProps<HTMLElement> & ButtonProps> = ({
  appearance,
  children,
  onClick,
}): JSX.Element => {
  //   console.log('render Button');
  return (
    <button
      onClick={onClick}
      className={cn(styles.button, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost',
      })}
    >
      {children}
    </button>
  );
};
