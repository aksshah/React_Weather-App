import React, { useState } from 'react';
import './LanguageChanger.css';
import { useTranslation } from 'react-i18next';

export const LanguageChanger: React.FC = () => {
    const [language, setLanguage] = useState<string>('de');
    const { i18n } = useTranslation();

    const updateLanguage = (e:string) => {
        setLanguage(e == 'de' ? 'en' : 'de');
        i18n.changeLanguage(e);
    }

    return (
        <div className='language_changer'>
            <button
                type="button"
                value='en'
            >EN</button>
            <input
                type="checkbox"
                className="toggle"
                id="toggle_language"
                title="Toggle language"
                onChange={() => updateLanguage(language)}
            ></input>
            <label htmlFor="toggle_language"></label>
            <button
                type="button"
                value='de'
            >DE</button>
        </div>
    )
};