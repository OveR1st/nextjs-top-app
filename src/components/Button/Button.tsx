import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import { HTMLProps } from 'react';

export const Button: React.FC<ButtonProps> = ({
  appearance,
  children,
  onClick,
  className,
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
    </button>
  );
};
