import { useCallback, useContext } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY } from '../../const';
import { ThemeContext } from '../context/themeContext';

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = useCallback(() => {
        let newTheme: ETheme;
        switch (theme) {
            case 'dark':
                newTheme = 'light';
                break;
            case 'light':
                newTheme = 'dark';
                break;
            default:
                newTheme = 'light';
        }
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }, [theme, setTheme]);

    return {
        theme,
        toggleTheme,
    };
};
