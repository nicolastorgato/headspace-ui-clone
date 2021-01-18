import {useState, useEffect} from 'react'

export default function useDarkMode() {

    const [theme, setTheme] = useState('light');

    const iconColorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(iconColorTheme);
        root.classList.add(theme);
    }, [theme, iconColorTheme])

    return [iconColorTheme, setTheme];
}

