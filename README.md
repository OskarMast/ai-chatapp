 # AI Chat Application Interface

This project is an AI chat application interface developed using React for the frontend and Nest.js for the backend. It allows users to interact with an AI assistant through a simple and user-friendly chat interface. It uses a REST API in backend that can receive user input from the frontend and respond based on a simple response algorithm that returns predefined responses based on keywords in the user input.

## Prerequisites

Before running the application, make sure you have the following installed:
- React.js (Preferably the latest version)
- npm (Node Package Manager)
- Nest js
- Git (For version control)

## Installation

To set up the project locally, follow these steps:

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/kaiwalya-07/AI_CHAT_APP_INTERFACE
cd AI_CHAT_APP_INTERFACE
```
### Frontend Setup using React js (& Typescript)
 ```bash
npx create-react-app my-chat-app --template typescript
cd my-chat-app
```

### Backend Setup using Nest Js
 ```bash
npm i -g @nestjs/cli
nest new my-chat-backend
cd my-chat-backend
```

### Run the Application
 For the frontend after moving to the directory
 ```bash
  npm start
```

 For the backend after moving to the directory
 ```bash
  npm run start
```

This will launch the React application in your default web browser.
By default, it will be accessible at http://localhost:3002 (As i have used this in code you may change it).

## Test the project
 Play with the functionsof chat bot

## Contribute and Future Scope
#### This project is a basic simple REGEX based response algorithm implementation . It can be made more vivid and robust using NLP or other AI tools integration.
#### We can also integrate OPEN AI using its API to make this a GPT like tool. 
#### Feel free to contribute by making a pull request
