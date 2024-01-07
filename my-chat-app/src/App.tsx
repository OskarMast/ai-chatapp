import React, { useState } from 'react';
import './App.css';

// Interface for the message object
interface IMessage {
  sender: 'user' | 'bot';
  content: string;
}

const App: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([
    { sender: 'bot', content: 'Hello, I am Chatty! How may I assist you?' },
  ]);
  const [input, setInput] = useState('');

  /*       Function to handle sending of message
           The below part not only recives input and give output but is also capable to handle
           exceptions and throw errors if the response is not OK.
           if everything is fine then the integration part comes into play and through the REST API that is developed in nest file
           the communication is done betwen frontend and backend
           CORS is also enabled for the communication.

          The function returns the REACT frontend which is again for the sake of ease of coding is divided into parts 
            1. chat-container
            2. send-container
            3. background 
          The styling is done in a seperate css file.
          We will have a full control of this function

  */
  const sendMessage = async () => {
    if (input.trim()) {
      const newUserMessage: IMessage = { sender: 'user', content: input };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);

      try {
        const response = await fetch('http://localhost:3002/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userMessage: input }),
        });

        if (!response.ok) {
          throw new Error(`Its an HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const newBotMessage: IMessage = { sender: 'bot', content: data.botResponse };
        setMessages((prevMessages) => [...prevMessages, newBotMessage]);
      } catch (error) {
        console.error('Cannot send the message:', error);
        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', content: 'Uh oh! Cannot communicate with server.' }]);
      }

      setInput('');
    }
  };

  return (
    <div className="App">
      <div className="app-title">CHATTYBOT</div>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.content}
          </div>
        ))}
      </div>
      <div className="send-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button type="button" onClick={sendMessage}>ASK YOUR DOUBTS</button>
      </div>
    </div>
  );
};

export default App;
