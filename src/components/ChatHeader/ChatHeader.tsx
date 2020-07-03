import React, { MouseEvent, useState, useEffect } from 'react';
import './ChatHeader.scss';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ChatHeaderElement = styled.div`
    background: ${props => props.theme.colors.chatHeaderColor};
`;

const ChatHeader: React.FC<ChatHeaderProperties> = props => {

    const { t } = useTranslation();

    const [selectedTabIdentifier, setSelectedTabIdentifier] = useState('chat');
    const [unseenMessageCount, setUnseenMessageCount] = useState(props.unseenMessageCount);

    const handleTabChange = (event: MouseEvent<HTMLLIElement>, tabIdentifier: string) => {
        event.preventDefault();
        setSelectedTabIdentifier(tabIdentifier);
        // Sending the current tab identifier to the parent component
        props.onTabChange(tabIdentifier)
    }

    useEffect(() => {
        setUnseenMessageCount(props.unseenMessageCount);
      }, [props.unseenMessageCount]);

    return (
        <ChatHeaderElement>
            <div className="chat-header">
                <div className="left">
                    <ul>
                        <li onClick= { (event) => handleTabChange(event, 'chat') } className={`${selectedTabIdentifier === 'chat' ? "active" : ""}`}>
                            <button>{t('Chat')}</button>
                            { unseenMessageCount > 0 && <sup className="unseen-messages-badge blink">{unseenMessageCount}</sup> }
                        </li>
                        <li onClick= { (event) => handleTabChange(event, 'settings') } className={`${selectedTabIdentifier === 'settings' ? "active" : ""}`}>
                            <button>{t('Settings')}</button>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    
                </div>
            </div>
        </ChatHeaderElement>
    );

};

interface ChatHeaderProperties {
    onTabChange: any;
    unseenMessageCount: number;
}

export default ChatHeader;