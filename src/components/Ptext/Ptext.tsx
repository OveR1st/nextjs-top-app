import { PtextProps } from './Ptext.props';
import styles from './Ptext.module.css';
import cn from 'classnames';

export const PText: React.FC<PtextProps> = ({
  size = 'm',
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.m]: size === 'm',
        [styles.s]: size === 's',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
