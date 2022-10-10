import './App.css';
import Form from "./components/Form/form";
import {useEffect, useState} from "react";
import MessageList from "./components/MessageList/MessageList";
import {AUTHORS} from "./utils/constans";

const App = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  }

  const sendMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`
    });
  };

  useEffect(() => {
    let timeout;
    if (messages[messages.length - 1]?.author === AUTHORS.human) {
      setTimeout(() => {
        addMessage( {
          text: "Hello friend",
          author: AUTHORS.robot,
          id: `msg-${Date.now()}`
        })
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    }
  }, [messages]);

  return (
    <div className="App">
      <MessageList messages={messages} />
      <Form onSubmit={sendMessage}/>
    </div>
  );
};

export default App;
