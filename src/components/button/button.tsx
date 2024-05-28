import { ComponentProps } from 'react';
import styles from './button.module.css';
import clsx from 'clsx';

/* 
 This means that
 the button component takes everything that button elements take,
 plus a variant prop.
 */
export type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
};

export const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => {
  let classes = clsx(styles.button, styles[variant], className);
  return <button {...props} className={classes} />;
};
