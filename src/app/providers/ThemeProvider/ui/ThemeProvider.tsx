import {
  FC, ReactNode, useEffect, useMemo, useState,
} from 'react';
import { LS_THEME_KEY } from 'shared/consts/localStorageKeys';
import { Theme, ThemeContext } from '../lib/ThemeContext';

const LS_THEME = (localStorage.getItem(LS_THEME_KEY) as Theme);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = (
  {
    children,
  },
) => {
  const [theme, setTheme] = useState<Theme>(LS_THEME || Theme.Light);

  const defaultThemeProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  useEffect(() => {
    document.body.className = `app-${theme}-theme`;
  }, [theme]);

  return (
    <ThemeContext.Provider value={ defaultThemeProps }>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
