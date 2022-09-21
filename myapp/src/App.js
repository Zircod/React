import logo from './logo.svg';
import './App.css';

function App() {
  const message = 'Hi, I am leaning React'

  return (
    <div className="App">
      <Myheader message = {message} />
    </div>
  );
}

export default App;

const Myheader = ({message}) => {

  console.log(message)

  return (
    <div className='header'>
      <h1>{message}</h1>
    </div>
  );
}
