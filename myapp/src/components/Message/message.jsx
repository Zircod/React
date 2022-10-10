import s from './message.module.css';

const Message = ({ text, author }) => {
  console.log({ text, author });

  return (
    <div className={s.messages}>
      <span>{author}:</span> <span>{text}</span>
    </div>
  );
};

export default Message;