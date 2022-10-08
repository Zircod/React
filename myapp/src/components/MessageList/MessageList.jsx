import Message from "../Message/message";

const MessageList = ({ messages }) =>
  messages.map((msg) => <Message text={msg.text} author={msg.author} />);

export default MessageList;