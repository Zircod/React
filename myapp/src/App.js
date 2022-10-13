import './App.css';
import Form from "./components/Form/form";
import {useEffect, useRef, useState} from "react";
import MessageList from "./components/MessageList/MessageList";
import {AUTHORS} from "./utils/constans";
import ChatList from "./components/ChatList/chatList";

const App = () => {
  const [messages, setMessages] = useState([]);
  const timeout =useRef();

  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  }

  const sendMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`,
    });
  };

  useEffect(() => {
    // let timeout;
    if (messages[messages.length - 1]?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        addMessage( {
          text: "Hello friend",
          author: AUTHORS.robot,
          id: `msg-${Date.now()}` //for key
        })
      }, 1000);
    }

    return () => {
      clearTimeout(timeout.current);
    }
  }, [messages]);

  return (
    <div className="App">
      <ChatList />
      <div className="appWrapper">
        <MessageList messages={messages} />
        <Form onSubmit={sendMessage}/>
      </div>
    </div>
  );
};

export default App;
