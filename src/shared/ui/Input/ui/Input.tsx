import { FC, InputHTMLAttributes } from 'react';
import { cn } from 'shared/lib/helpers/classNames';
import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: FC<InputProps> = (
  {
    className,
    ...otherProps
  },
) => {
  return (
    <label className={ cn([cls.inputWrapper, className]) }>
      <input
        className={ cls.input }
        { ...otherProps }
        placeholder={ otherProps.placeholder }
      />
      <span className={ cls.inputPlaceholder }>
        { otherProps.placeholder }
      </span>
    </label>
  );
};

export default Input;
