import { ChangeEvent, FC } from 'react';
import { cn } from 'shared/lib/helpers/classNames';
import SunIcon from 'shared/assets/icons/sun.svg';
import MoonIcon from 'shared/assets/icons/moon.svg';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import useTheme from 'app/providers/ThemeProvider/lib/useTheme';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (
  {
    className,
  },
) => {
  const { theme, changeTheme } = useTheme();

  const onChangeTheme = (isDark: boolean) => {
    changeTheme(isDark ? Theme.Dark : Theme.Light);
  };

  return (
    <label className={ cn([cls.themeSwitcher, className]) }>
      <input
        type="checkbox"
        className={ cls.input }
        name="theme-switcher"
        checked={ theme === Theme.Dark }
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
