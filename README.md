# socket.io based Chat

# What is it

This application is a socket.io based Chat. It allows users to send messages to each other in the given Chat Room.

## How does it work

The chat initiates the session if it's supplied a userName and a chatRoom in the query parameters (done in query parameters for simplicity's sake). When the users join the Chat room, a notification is fired from the name of Administration to the rest of the participants letting them know that new user joined. The same way, when the user leaves the chat (closes the browser window) - a notification is sent to the Chat participants letting them know that the user left.

Smileys are supported. Each smiley such as :) or ;) will be converted to a smiley image.

The Chat also has a Settings section where the users can change the following settings:

- User name,
- Interface color:
	- Light
	- Dark
- Clock Display:
	- 12 hours
	- 24 hours
- Send messages on CTRL+ENTER:
	- On
	- Off
- Language (the application supports English and French)

## Setup instructions

The Chat application is deployed to Heroku. You can test the chat by visiting the following links:

User 1: https://still-depths-67547.herokuapp.com/chat?userName=FirstUser&chatRoom=doclerRoom  
User 2: https://still-depths-67547.herokuapp.com/chat?userName=SecondUser&chatRoom=doclerRoom

Or you can clone the code from the repository and run:

```bash
npm install
```

After all of the components are installed run the following in terminal:

```bash
npm start
```

The Chat server repository is located here:

https://github.com/edgarmkrtchyan/chat-server

To run it locally you'll need to clone the repository to your local machine and run:

```bash
npm install
```

After all of the components are installed run the following in terminal:

```bash
npm start
```

Once both front-end and server components are installed and run on local machine you will be able to use the Chat visiting the following links (given port 3000 was not busy on your machine when you run npm start for front-end, then you should change the port in the links below to the one the application runs on your machine):

User 1: http://localhost:3000/chat?userName=FirstUser&chatRoom=doclerRoom  
User 2: http://localhost:3000/chat?userName=SecondUser&chatRoom=doclerRoom


## Required And Implemented Features List

- [x] A socket.io based chat interface. 
- [x] The UI based on the mockups.
- [x] It contains a chat message box, where the sent messages are floating right and the received messages are floating left. 
- [x] The message contains the text of the message, date time and the user name if it is not the current user.
- [x] There is a text input field and a send button at the bottom of the page.
- [x] If the user is on another tab and he/she gets a message, the chat tab will blink, until he doesn’t read the message.
- [x] Additional feature: Administrator notifications when somebody joined or left the chat room.
- [x] Smiles support
- [x] Unread messages count in the chat tab
- [x] User can modify the following settings:
	- User name (this is reflected in user's Settings section only - there was no reliable way to show the edited username to the other users in Chat as user name is an identifier telling if the message shown was sent by the current user);
	- Interface color;
		- Light;
		- Dark;
	- Clock Display;
		- 12 hours;
		- 24 hours;
	- Send messages on CTRL+ENTER;
		- On; 
        - Off;
	- Internationalization (the application supports English and French);
- [x] All settings are saved in local storage and there is a button “Reset to defaults”, by clicking on it application falls back to default settings.
- [x] React used as framework;
- [x] Used CSS preprocessor;
- [x] The app is written in TypeScript;
- [x] It works on every desktop and phone, both landscape and portrait
- [x] It works on desktop/tablet/phone on Chrome, Firefox and Safari
- [ ] Apologies, did not write any tests :(