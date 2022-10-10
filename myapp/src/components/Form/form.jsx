import s from './form.module.css';
import {useState} from "react";

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue('');//очистить поле ввода
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <input className={s.input}  value={value} onChange={handleChange} type="text"/>
        <button className={s.button}>Add message</button>
      </form>
    </div>
  );
};

export default Form;