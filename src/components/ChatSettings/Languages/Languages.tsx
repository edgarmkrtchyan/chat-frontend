import React, { useState, useEffect } from 'react';
import { LanguagesOptions } from '../../../interfaces/LanguagesOptions.interface';
import { useTranslation } from 'react-i18next';
import LabelComponent from '../LabelComponent'

const Languages: React.FC<InterfaceLanguageProperties> = props => {

    const { t, i18n } = useTranslation();

    /**
     * Used to define what should the default 
     * value of useState be for the language variable
     * If there's no value in localStorage - return a preset default
     */
    const languageDefaultValue = () => {
        const localStorageValue = localStorage.getItem('language');
        if (localStorageValue) {
            return localStorageValue
        } else {
            return 'en';
        }
    }
    
    const [languageValue, setValue] = useState(languageDefaultValue());

    const onValueChange = (event: any) => {
        setValue(event.target.value);
        localStorage.setItem('language', event.target.value);
        // Changing the language
        i18n.changeLanguage(event.target.value);
    }

    useEffect(() => {
        setValue(props.default);
      }, [props.default]);

    const selectOptions: Array<LanguagesOptions> = [
        {
            value: 'en',
            label: t('English')
        },
        {
            value: 'fr',
            label: t('French')
        }
    ]

    return (
        <div className="form-group" key={languageValue}>
            <LabelComponent>{t('Language')}</LabelComponent>
            <select name="language" defaultValue={languageValue} onChange={(event) => onValueChange(event)} className="form-control select-control">
                {
                    selectOptions.map(languageOption => <option value={languageOption.value} key={languageOption.value}>{languageOption.label}</option>)
                }
            </select>
        </div>
    );

};

interface InterfaceLanguageProperties {
    default: string;
}

export default Languages;