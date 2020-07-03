import React from 'react';
import './ChatMessage.scss';
import ReactEmoji from 'react-emoji'

const ChatMessages: React.FC<ChatSingleMessageProperties> = props => {

    let messageBelongsToCurrentUser = false;
    const trimmedUserName = props.userName.trim();

    if (props.messageOwnerName === trimmedUserName) {
        messageBelongsToCurrentUser = true;
    }

    const formatDate = (timestamp: number) => {
        const clockDisplay = localStorage.getItem('clockDisplay');
        let hour12TimeDisplay: boolean = true;
        if (clockDisplay && clockDisplay !== 'hour12') {
            hour12TimeDisplay = false;
        }
        if (timestamp) {
            return new Intl.DateTimeFormat('en-US', {
                                                        year: 'numeric', 
                                                        month: '2-digit', 
                                                        day: '2-digit', 
                                                        hour: '2-digit', 
                                                        minute: '2-digit', 
                                                        second: '2-digit', 
                                                        hour12: hour12TimeDisplay
                                                    }).format(timestamp);
        }
    }

    return (
        messageBelongsToCurrentUser ?
        (
            <li className="clearfix">
                <div className="message-data align-right">
                    <span className="message-data-time">{ formatDate(props.time) }</span>
                </div>
                <div className="message received-message float-right">
                    { ReactEmoji.emojify(props.message) }
                </div>
            </li>
        ):
        (
            <li>
                <div className="message-data">
                    <span className="message-data-name">{ props.messageOwnerName }</span>
                    <span className="message-data-time">{ formatDate(props.time) }</span>
                </div>
                <div className="message user-message">
                    { ReactEmoji.emojify(props.message) }
                </div>
            </li>
        )
    );

};

interface ChatSingleMessageProperties {
    message: string;
    userName: string;
    messageOwnerName: string;
    time: number;
}


export default ChatMessages;