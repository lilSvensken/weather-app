import { FC, SelectHTMLAttributes } from 'react';
import { cn } from 'shared/lib/classNames';
import { Options } from 'shared/interfaces/Options.interfaces';
import cls from './Select.module.scss';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options: Options[];
}

export const Select: FC<SelectProps> = (
  {
    className,
    options,
    defaultValue,
    ...otherProps
  },
) => {
  return (
    <select
      className={ cn([cls.select, className]) }
      defaultValue={ defaultValue }
      { ...otherProps }
    >
      {
        options.map((option) => (
          <option
            key={ option.value }
            className={ cls.option }
            value={ option.value }
            disabled={ option.disabled }
          >
            {option.text}
          </option>
        ))
      }
    </select>
  );
};

export default Select;
