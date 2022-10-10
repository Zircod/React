import s from './message.module.css';
import PropTypes from 'prop-types';

const Message = ({ text, author }) => {
  console.log({ text, author });

  return (
    <div className={s.messages}>
      <span>{author}:</span> <span>{text}</span>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
}

export default Message;