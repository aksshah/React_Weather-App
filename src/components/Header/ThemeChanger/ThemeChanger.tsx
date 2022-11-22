import React, { useState } from 'react';
import './ThemeChanger.css';

interface Props {
    onModeChange: (mode: string) => void
}

export const ThemeChanger: React.FC<Props> = ({ onModeChange }) => {
    const [mode, setThemeMode] = useState<string>('Dark');

    const updateThemeMode = (mode: string) => {
        mode = (mode == 'Dark' ? 'Light' : 'Dark');
        setThemeMode(mode);
        onModeChange(mode);
        const body = document.getElementsByTagName('body')[0];
        body.className = '';
        body.classList.add(mode);
    }

    return (
        <div className='theme_changer'>
            <button
                type="button"
                className={mode == 'Dark' ? 'active' : 'inactive'}
            >Dark</button>
            <input
                type="checkbox"
                className="toggle"
                id="toggle_theme"
                title="Toggle theme"
                onChange={() => updateThemeMode(mode)}
            ></input>
            <label htmlFor="toggle_theme"></label>
            <button
                type="button"
                className={mode == 'Light' ? 'active' : 'inactive'}
            >Light</button>
        </div>
    )
};