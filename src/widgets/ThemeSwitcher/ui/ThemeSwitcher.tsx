import { ChangeEvent, FC } from 'react';
import { cn } from 'shared/lib/helpers/classNames';
import SunIcon from 'shared/assets/icons/sun.svg';
import MoonIcon from 'shared/assets/icons/moon.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (
  {
    className,
  },
) => {
  const onChangeTheme = (isDark: boolean) => {
    if (isDark) {
      // eslint-disable-next-line no-console
      console.log('Тёмная тема');
    } else {
      // eslint-disable-next-line no-console
      console.log('Светлая тема');
    }
  };

  return (
    <label className={ cn([cls.themeSwitcher, className]) }>
      <input
        type="checkbox"
        className={ cls.input }
        name="theme-switcher"
        onChange={ (e: ChangeEvent<HTMLInputElement>) => onChangeTheme(e.target.checked) }
      />
      <div className={ cls.iconsWrapper }>
        <SunIcon className={ cn([cls.icon, cls.left]) } />
        <MoonIcon className={ cn([cls.icon, cls.right]) } />
      </div>
    </label>
  );
};

export default ThemeSwitcher;
