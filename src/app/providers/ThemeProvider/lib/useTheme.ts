import { useContext } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from 'app/providers/ThemeProvider/lib/ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): UseThemeResult => {
    const { theme = Theme.Light, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.Dark:
                newTheme = Theme.Light;
                break;
            case Theme.Light:
                newTheme = Theme.Dark;
                break;
            default:
                newTheme = Theme.Light;
        }
        document.body.className = newTheme;
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.Light,
        toggleTheme,
    };
};
