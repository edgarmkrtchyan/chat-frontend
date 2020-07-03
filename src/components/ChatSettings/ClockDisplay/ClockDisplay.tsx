import React, { useState, useEffect } from 'react';
import { ClockDisplayOptions } from '../../../interfaces/ClockDisplayOptions.interface';
import { useTranslation } from 'react-i18next';
import LabelComponent from '../LabelComponent'

const ClockDisplay: React.FC<InterfaceClockDisplayProperties> = props => {

    const { t } = useTranslation();

    /**
     * Used to define what should the default 
     * value of useState be for the clockDisplay variable
     * If there's no value in localStorage - return a preset default
     */
    const clockDisplayDefaultValue = () => {
        const localStorageValue = localStorage.getItem('clockDisplay');
        if (localStorageValue) {
            return localStorageValue
        } else {
            return 'hour12';
        }
    }
    
    const [clockDisplayValue, setValue] = useState(clockDisplayDefaultValue());

    const onValueChange = (event: any) => {
        setValue(event.target.value);
        localStorage.setItem('clockDisplay', event.target.value);
    }

    useEffect(() => {
        setValue(props.default);
      }, [props.default]);

    const selectOptions: Array<ClockDisplayOptions> = [
        {
            value: 'hour12',
            label: t('12 hours')
        },
        {
            value: 'hour24',
            label: t('24 hours')
        }
    ]

    return (
        <div className="form-group">
            <LabelComponent>{t('Clock display')}</LabelComponent>
            <div className="radio-list" key={props.default}>
                {
                    selectOptions.map((clockDisplayOption, i) => 
                        <LabelComponent className="radio" key={i}>
                            <input type="radio" name="clockdisplay" onChange={(event) => onValueChange(event)} checked={clockDisplayValue === clockDisplayOption.value} value={clockDisplayOption.value} key={clockDisplayOption.value} /> {clockDisplayOption.label}
                            <span></span>
                        </LabelComponent>
                    )
                }
            </div>
        </div>
    );

};

interface InterfaceClockDisplayProperties {
    default: string;
}

export default ClockDisplay;