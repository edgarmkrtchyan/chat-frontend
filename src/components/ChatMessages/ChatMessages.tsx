import React, { useEffect } from 'react';
import './ChatMessages.scss';
import { MessageInterface } from '../../interfaces/Message.interface';
import ChatMessage from '../ChatMessage/ChatMessage'
import { animateScroll as scroll} from 'react-scroll'
import styled from 'styled-components';

const ChatMessagesWrapper = styled.div`
    background: ${props => props.theme.colors.chatMessagesBackground};
`;

const ChatMessages: React.FC<ChatMessageProperties> = props => {

    const scrollToBottom = () => {
        scroll.scrollToBottom({
            containerId: "messages-area-container",
            duration: 500,
            smooth: "easeInOutQuint"
        });
    }

    // Scrolling to bottom when the component is updated
    useEffect(() => {
        scrollToBottom();
    });

    return (
        <ChatMessagesWrapper className="messages-area" id="messages-area-container">
            <ul>
                { props.messages.map((message, i) => <div key={i}><ChatMessage message={message.text} time={message.time} userName={props.userName} messageOwnerName={message.user} /></div>) }
            </ul>
        </ChatMessagesWrapper>
    );

};

interface ChatMessageProperties {
    messages: MessageInterface[];
    userName: string;
}


export default ChatMessages;