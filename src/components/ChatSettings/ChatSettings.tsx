import React, { MouseEvent } from 'react';
import './ChatSettings.scss';
import UserName from '../ChatSettings/UserName/UserName'
import InterfaceColor from '../ChatSettings/InterfaceColor/InterfaceColor'
import ClockDisplay from '../ChatSettings/ClockDisplay/ClockDisplay'
import SendOnEnter from '../ChatSettings/SendOnEnter/SendOnEnter'
import Languages from '../ChatSettings/Languages/Languages'
import { SettingsInterface } from '../../interfaces/Settings.interface';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Styling to apply themes
const ResetSettingsButton = styled.button`
    background: ${props => props.theme.colors.resetSetttingsButtonBackgroundColor};
`;

const SettingsAreaWrapper = styled.div`
    background: ${props => props.theme.colors.settingsAreaBackground};
`;

const ChatSettings: React.FC<ChatSettingsProperties> = props => {

    const { t, i18n } = useTranslation();
    
    const defaults: SettingsInterface = {
        color: 'light',
        clockDisplay: 'hour12',
        sendOnCtrlEnter: 'on',
        language: 'en'
    }

    let colorScheme = localStorage.getItem('interfaceColor');

    if (colorScheme === null) {
        colorScheme = defaults.color;
    } 

    let clockDisplay = localStorage.getItem('clockDisplay');
    
    if (clockDisplay === null) {
        clockDisplay = defaults.clockDisplay;
    }

    let sendOnCtrlEnter = localStorage.getItem('sendOnEnter');
    
    if (sendOnCtrlEnter === null) {
        sendOnCtrlEnter = defaults.sendOnCtrlEnter;
    }

    let setLanguage = localStorage.getItem('language');
    
    if (setLanguage === null) {
        setLanguage = defaults.language;
    }

    const resetSettingsToDefaults = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        //  Clearing the local storage from saved settings
        localStorage.clear();
        // Resetting the color scheme
        colorScheme = defaults.color;
        setTheme(defaults.color);
        // Resetting the clock display
        clockDisplay = defaults.clockDisplay;
        // Resetting the send on ctrl+Enter
        sendOnCtrlEnter = defaults.sendOnCtrlEnter;
        // Resetting the language
        setLanguage = defaults.language;
        // Resetting the language
        i18n.changeLanguage(defaults.language);
    }

    // Notifying the parent component that the theme was changed
    const setTheme = (event: any) => {
        props.setTheme(event);
    }

    return (
       <div>
            <SettingsAreaWrapper className="settings-area">
                <form action="" className="settings-form">
                    <UserName userName={props.userName} />
                    <InterfaceColor default={colorScheme} setTheme={setTheme} />
                    <ClockDisplay default={clockDisplay} />
                    <SendOnEnter default={sendOnCtrlEnter} />
                    <Languages default={setLanguage} />
                </form>
            </SettingsAreaWrapper>
            <div className="bottom-area">
                <ResetSettingsButton className="reset-settings-button" onClick={(event) => resetSettingsToDefaults(event)}>{t('Reset to Defaults')}</ResetSettingsButton>
            </div>
        </div>
    );

};

interface ChatSettingsProperties {
    userName: string;
    setTheme: any;
}

export default ChatSettings;