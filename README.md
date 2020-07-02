# Chat Frontend

# What is it

## How does it work

## Setup instructions

I've deployed both the front-end and server components to Heroku. You can test the chat visiting the following links:

User 1: http://localhost:3000/chat?userName=FirstUser&chatRoom=doclerRoom
User 2: http://localhost:3000/chat?userName=SecondUser&chatRoom=doclerRoom

Or you can clone the code from the repository and run:

```bash
npm install
```

After all of the components are installed run the following in terminal:

```bash
npm start
```

This will run the application on your local machine

## Required Features List

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
	- User name;
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