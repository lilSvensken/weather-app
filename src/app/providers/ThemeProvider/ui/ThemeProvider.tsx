import {
  FC, ReactNode, useEffect, useMemo, useState,
} from 'react';
import { Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from 'app/providers/ThemeProvider/lib/useTheme';

const LS_THEME = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme);

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
