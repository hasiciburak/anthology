import { ComponentProps } from 'react';
import { variants, type ButtonVariants } from './button-variants';

/* 
 This means that
 the button component takes everything 
 that button elements take,
 plus a variant prop.
 */
type ButtonProps = ComponentProps<'button'> &
  ButtonVariants & {
    variant?: ButtonVariants['variant'];
    size?: 'small' | 'medium' | 'large';
  };

export const Button = ({
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}: ButtonProps) => {
  return <button {...props} className={variants({ variant, size })} />;
};
