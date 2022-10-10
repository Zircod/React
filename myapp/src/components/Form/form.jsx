import {useDebugValue, useEffect, useRef, useState} from "react";
import {Button, TextField} from "@mui/material";
import s from './form.module.css';

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue('');//очистить поле ввода
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  useEffect(() => {
    console.log("did mount", inputRef);
    inputRef.current?.focus();
  })

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        {/*<input className={s.input}  value={value} onChange={handleChange} type="text" ref={inputRef}/>*/}
        {/*<button className={s.button}>Add message</button className={s.button}>*/}
        <TextField value={value} onChange={handleChange} inputRef={inputRef}/>
        <Button className={s.button} type="submit" variant={"contained"}> Add message </Button>
      </form>
    </div>
  );
};

export default Form;