import React, { useState, useEffect, SetStateAction } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { RouteComponentProps } from "react-router-dom";
import { MessageInterface } from '../../interfaces/Message.interface';
import ChatHeader from '../ChatHeader/ChatHeader'
import TextInput from '../TextInput/TextInput'
import ChatMessages from '../ChatMessages/ChatMessages'
import ChatSettings from '../ChatSettings/ChatSettings'
import { ThemeProvider } from "styled-components";
import lightTheme from "../../themes/light";
import darkTheme from "../../themes/dark";

let socket: any;

const Chat: React.FC<RouteComponentProps> = props => {

    const [userName, setUserName] = useState('');
    const [messages, setMessages] = useState<MessageInterface[] | []>([]);
    const [message, setMessage] = useState('');
    const [selectedTabIdentifier, setSelectedTabIdentifier] = useState('chat');
    let [unseenMessagesCount, setUnseenMessageCount] = useState(0);
    const CHAT_ENDPOINT = 'http://localhost:5000/'

    useEffect(() => {
        const params: any = queryString.parse(props.location.search);
        const userName: SetStateAction<string> = params['userName'];
        const chatRoom: SetStateAction<string> = params['chatRoom'];

        socket = io(CHAT_ENDPOINT)
        
        setUserName(userName);

        // Emiting an event of the user joined the chat room
        socket.emit('join', { userName, chatRoom }, () => {  });

        return () => {
            // Emiting the disconnect effect
            socket.emit('disconnect');
            socket.off();
        }

    }, [CHAT_ENDPOINT, props.location.search]); // Invoke this hook only when the CHAT_ENDPOINT or query string params are changed

    // Hook for messages
    useEffect(() => {
        const handler = (message: MessageInterface) => {
            // Adding the time the message was received
            message.time = new Date().getTime();
            setMessages([...messages, message]);

            // Counting the unseen messages
            if (selectedTabIdentifier !== 'chat') {
                setUnseenMessageCount(unseenMessagesCount+1);
            }
        }

        socket.on('message', handler);
        return () => {
            socket.off('message', handler);
        }

    }, [messages, selectedTabIdentifier, unseenMessagesCount]) // Invoke this hook only when all three are changed

    // Sending the messages
    const sendMessage = (event: any) => {
        event.preventDefault();
        if (message) {
            socket.emit('sendChatMessage', message, () => setMessage(''));
        }
    }

    const tabChangeHandler = (selectedTabIdentifier: string) => {
        setSelectedTabIdentifier(selectedTabIdentifier);
        if (selectedTabIdentifier === 'chat') {
            setUnseenMessageCount(0);
        }
    }

    /**
     * Interface color handling
     * First checking if there's a setting stored in localStorage
     */
    const storedInterfaceColor = localStorage.getItem("interfaceColor");
    const [isDarkMode, setIsDarkMode] = useState(
        storedInterfaceColor === "true" ? true : false
    );

    useEffect(() => {
        if(storedInterfaceColor === 'dark') {
            setIsDarkMode(true);
        }
    }, [storedInterfaceColor]);

    // This is getting called from a child component
    const setTheme = (event: any) => {
        if(event === 'dark') {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <ChatHeader onTabChange={tabChangeHandler} unseenMessageCount={unseenMessagesCount} />
            { selectedTabIdentifier==='chat' && <ChatMessages messages={messages} userName={userName} /> }
            { selectedTabIdentifier==='chat' && <TextInput message={message} setMessage={setMessage} sendMessage={sendMessage} /> }
            { selectedTabIdentifier==='settings' && <ChatSettings userName={userName} setTheme={setTheme} /> }
        </ThemeProvider>
    )
};

export default Chat;