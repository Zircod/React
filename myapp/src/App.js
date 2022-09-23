import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [messagesList, setMessagesList] = useState([
    {
      text: '',
      author: ''
    },
    {
      text: '',
      author: ''
    }
  ]);
  const [messagesBody, setMessagesBody] = useState({
    test: '',
    author: ''
  });

  const ROBOT_MESSAGE = 'Привет! Я получил твое сообщение.';

  useEffect(() => {
    if (messagesList.length > 0 && messagesList.slice(-1)[0].author !== 'robot') {
      setTimeout(() => {
        setMessagesList(pervstate => [...pervstate, {text:ROBOT_MESSAGE, author:'robot'}])
      }, 1500)
    }
  }, [messagesList])



  return (
    <div className="App">
        <Form data={messagesBody} setData={setMessagesBody} setMessages={setMessagesList}/>
        <div className="messagesList">
          {messagesList.map((e) => <Message text={e.text} autor={e.autor} />)}
        </div>
    </div>
  );
}

export default App;

const Form = ({ data, setData, setMessage }) => {

      const {text, author} = data;

      const submitForm =(e) => {
        e.preventDefault();
        if (text.length > 0) {
        setMessage(pervstate => [...pervstate, {text, author}])
        }

        setData(
          {
            text: '',
            author: ''
          }
        )
    }


  return (
    <form onSubmit={submitForm}>
      <input placeholder='Имя' value={text} onChange = {(e) =>
        setData(pervstate => ({...pervstate, text: e.target.value})
      )}/>

      <input placeholder='Текст' value={author} onChange = {(e) =>
      setData(pervstate => ({...pervstate, author: e.target.value})
      )}/>

      <button type="submit">Отправить</button>
    </form>
  )
}
