import { ComponentProps } from 'react';
import styles from './button.module.css';
/* 
 This means that
 the button component takes everything that button elements take,
 plus a variant prop.
 */
export type ButtonProps = ComponentProps<'button'> & {
  variant: 'primary' | 'secondary' | 'destructive';
};

export const Button = ({ variant, ...props }: ButtonProps) => {
  let className = styles.button;
  if (variant === 'secondary') className += ' ' + styles.secondary;
  if (variant === 'destructive') className += ' ' + styles.destructive;
  return <button {...props} className={className} />;
};
