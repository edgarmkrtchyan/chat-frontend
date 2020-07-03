import React, { useState, useEffect } from 'react';
import { SendOnEnterOptions } from '../../../interfaces/SendOnEnterOptions.interface';
import { useTranslation } from 'react-i18next';
import LabelComponent from '../LabelComponent'

const SendOnEnter: React.FC<InterfaceSendOnEnterProperties> = props => {

    const { t } = useTranslation();

    /**
     * Used to define what should the default 
     * value of useState be for the sendOnEnter variable
     * If there's no value in localStorage - return a preset default
     */
    const sendOnEnterDefaultValue = () => {
        const localStorageValue = localStorage.getItem('sendOnEnter');
        if (localStorageValue) {
            return localStorageValue
        } else {
            return 'on';
        }
    }
    
    const [sendOnEnterValue, setValue] = useState(sendOnEnterDefaultValue());

    const onValueChange = (event: any) => {
        setValue(event.target.value);
        localStorage.setItem('sendOnEnter', event.target.value);
    }

    useEffect(() => {
        setValue(props.default);
      }, [props.default]);

    const selectOptions: Array<SendOnEnterOptions> = [
        {
            value: 'on',
            label: t('On')
        },
        {
            value: 'off',
            label: t('Off')
        }
    ]

    return (
        <div className="form-group" key={sendOnEnterValue}>
            <LabelComponent>{t('Send messages on CTRL+Enter')}</LabelComponent>
            <div className="radio-list">
                {
                    selectOptions.map((sendOnEnterOption, i) => 
                        <LabelComponent className="radio" key={i}>
                            <input type="radio" name="sendOnEnter" onChange={(event) => onValueChange(event)} checked={sendOnEnterValue === sendOnEnterOption.value} value={sendOnEnterOption.value} key={sendOnEnterOption.value} /> {sendOnEnterOption.label}
                            <span></span>
                        </LabelComponent>
                    )
                }
            </div>
        </div>
    );

};

interface InterfaceSendOnEnterProperties {
    default: string;
}

export default SendOnEnter;