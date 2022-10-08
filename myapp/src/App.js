import './App.css';
import Form from "./components/Form/form";
import {useEffect, useState} from "react";
import MessageList from "./components/MessageList/MessageList";
import {AUTHORS} from "./utils/constans";

const msgs = [
  {
    author: 'Jon',
    text: 'Hi'
  }
];

const App = () => {

  const [messages, setMessages] = useState(msgs);

  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  }

  const sendMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
    });
  };

  useEffect(() => {
    let timeout;
    if (messages[messages.length - 1]?.author === AUTHORS.human) {
      setTimeout(() => {
        addMessage( { text: "Hello friend", author: AUTHORS.robot})
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
