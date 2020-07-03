import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LabelComponent from '../LabelComponent'

const UserName: React.FC<UserNameProperties> = props => {

    const { t } = useTranslation();

    /**
     * Used to define what should the default 
     * value of useState be for the userName variable
     * If there's no value in localStorage - take it from the props
     */
    const nameDefaultValue = () => {
        const localStorageValue = localStorage.getItem('userName');
        if (localStorageValue) {
            return localStorageValue
        } else {
            return props.userName;
        }
    }
    
    const [nameValue, setValue] = useState(nameDefaultValue());

    useEffect(() => {
        const localStorageValue = localStorage.getItem('userName');
        // Set the props value into local storage only if there's no value in there
        if (!localStorageValue) {
            localStorage.setItem('userName', props.userName);
        }
      }, [props.userName]);

    const onNameChange = (event: any) => {
        setValue(event.target.value);
        localStorage.setItem('userName', event.target.value);
    }

    return (
        <div className="form-group">
            <LabelComponent>{t('User name')}</LabelComponent>
            <input type="text" value={nameValue || props.userName} onChange={(event) => onNameChange(event)} className="form-control" />
        </div>
    );

};

interface UserNameProperties {
    userName: string;
}

export default UserName;