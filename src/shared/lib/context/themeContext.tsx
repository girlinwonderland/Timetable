import { createContext } from 'react';
import { ETheme } from '../../const';

export interface IContext {
    theme: ETheme,
    setTheme: (p: ETheme) => void
}

export const ThemeContext = createContext<IContext>({ theme: 'light', setTheme: () => {} });
