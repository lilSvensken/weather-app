import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

interface UseThemeResult {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = (theme: Theme) => {
    setTheme(theme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  };

  return {
    theme,
    changeTheme,
  };
}

export default useTheme;
