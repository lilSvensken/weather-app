import { FC } from 'react';
import { Options } from 'shared/interfaces/Options.interfaces';
import { Select } from 'shared/ui/Select';
import { cn } from 'shared/lib/helpers/classNames';
import cls from './LangSelect.module.scss';

export enum Languages {
  Ru = 'Ru',
  En = 'En',
}

const LANG_SELECT_OPTIONS: Options[] = [
  {
    text: Languages.Ru,
    value: Languages.Ru,
  },
  {
    text: Languages.En,
    value: Languages.En,
  },
];

interface LangSelectProps {
  className?: string;
}

export const LangSelect: FC<LangSelectProps> = (
  {
    className,
  },
) => {
  return (
    <Select
      className={ cn([cls.select, className]) }
      options={ LANG_SELECT_OPTIONS }
      defaultValue={ Languages.Ru }
    />
  );
};

export default LangSelect;
