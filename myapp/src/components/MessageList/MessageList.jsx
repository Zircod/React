import Message from "../Message/message";

const MessageList = ({ messages }) =>
  messages.map((msg) => <Message key={msg.id} text={msg.text} author={msg.author} />);

export default MessageList;