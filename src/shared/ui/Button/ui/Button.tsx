import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from 'shared/lib/classNames';
import cls from './Button.module.scss';

enum THEME {
  ANY = 'any'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: THEME;
}

export const Button: FC<ButtonProps> = (
  {
    className,
    theme,
    children,
    ...otherProps
  },
) => {
  return (
    <button
      className={ cn([cls.button, cls[theme], className]) }
      { ...otherProps }
    >
      { children }
    </button>
  );
};

export default Button;
