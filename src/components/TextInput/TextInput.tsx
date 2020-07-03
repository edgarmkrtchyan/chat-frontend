import React from 'react';
import './TextInput.scss';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const SendButton = styled.button`
    background: ${props => props.theme.colors.sendButtonBackgroundColor};
`;

const TextInputField = styled.textarea`
    background: ${props => props.theme.colors.textInputBackgroundColor};
    color: ${props => props.theme.colors.textInputTextColor};
    border-top: 1px solid ${props => props.theme.colors.textInputBorderTopColor};
    border-right: 1px solid ${props => props.theme.colors.textInputBorderRightColor};
`;

const TextInput: React.FC<TextInputPropertes> = props => {

    const { t } = useTranslation();

    const sendOnCtrlEnterEnabled = localStorage.getItem('sendOnEnter') !== 'off';

    return (
        <div className="bottom-area">
            <form className="message-form" onSubmit={e => { e.preventDefault();}}>
                <TextInputField 
                    className="text-input"
                    placeholder = { t('Type your message here') }
                    value = {props.message}
                    onChange={(event) => props.setMessage(event.target.value)}
                    onKeyPress={(event) => (event.key === 'Enter' && event.ctrlKey && sendOnCtrlEnterEnabled) ? props.sendMessage(event) : null } 
                ></TextInputField>
                <SendButton className="send-message-button" onClick={(event) => props.sendMessage(event)}>{t('Send')}</SendButton>
            </form>
        </div>
    );

};

interface TextInputPropertes {
    message: string;
    setMessage: any;
    sendMessage: any;
}

export default TextInput;