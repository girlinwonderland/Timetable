import React, { ReactNode, useMemo, useState } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY } from 'shared/const';
import { IContext, ThemeContext } from 'shared/lib/context/themeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || 'light';

interface IThemeProvider {
    initialTheme?: ETheme,
    children?: ReactNode
}

export const ThemeProvider: React.FC<IThemeProvider> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<ETheme>(initialTheme || defaultTheme);

    const contextValue: IContext = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
