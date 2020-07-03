import React, { useState, useEffect } from 'react';
import { InterfaceColorOptions } from '../../../interfaces/InterfaceColorOptions.interface';
import { useTranslation } from 'react-i18next';
import LabelComponent from '../LabelComponent'

const InterfaceColor: React.FC<InterfaceColorProperties> = props => {

    const { t } = useTranslation();

    /**
     * Used to define what should the default 
     * value of useState be for the interfaceColor variable
     * If there's no value in localStorage - return a preset default
     */
    const interfaceColorDefaultValue = () => {
        const localStorageValue = localStorage.getItem('interfaceColor');
        if (localStorageValue) {
            return localStorageValue
        } else {
            return 'light';
        }
    }
    
    const [interfaceColorValue, setValue] = useState(interfaceColorDefaultValue());

    const onValueChange = (event: any) => {
        setValue(event.target.value);
        localStorage.setItem('interfaceColor', event.target.value);
        props.setTheme(event.target.value);
    }

    useEffect(() => {
        setValue(props.default);
      }, [props.default]);

    const selectOptions: Array<InterfaceColorOptions> = [
        {
            value: 'light',
            label: t('Light')
        },
        {
            value: 'dark',
            label: t('Dark')
        }
    ]

    return (
        <div className="form-group">
            <LabelComponent>{t('Interface color')}</LabelComponent>
            <div className="radio-list" key={props.default}>
                {
                    selectOptions.map((interfaceColorOption, i) => 
                        <LabelComponent className="radio" key={i}>
                            <input type="radio" name="interfaceColor" onChange={(event) => onValueChange(event)} checked={interfaceColorValue === interfaceColorOption.value} value={interfaceColorOption.value} key={interfaceColorOption.value} /> {interfaceColorOption.label}
                            <span></span>
                        </LabelComponent>
                    )
                }
            </div>
        </div>
    );

};

interface InterfaceColorProperties {
    default: string;
    setTheme: any;
}

export default InterfaceColor;