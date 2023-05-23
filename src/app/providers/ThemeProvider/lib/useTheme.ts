import { useContext } from 'react';
import { LS_THEME_KEY } from 'shared/consts/localStorageKeys';
import { Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = (theme: Theme) => {
    setTheme(theme);
    localStorage.setItem(LS_THEME_KEY, theme);
  };

  return {
    theme,
    changeTheme,
  };
}

export default useTheme;
