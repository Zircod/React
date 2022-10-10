import s from './chatList.module.css';
import {List, ListItem, ListItemText} from "@mui/material";

const chats = [
  {
    name: "Chat all",
    id: "Chat_all",
  },
  {
    name: "Chat private",
    id: "Chat_private",
  },
  {
    name: "Chat family",
    id: "Chat_family",
  }
]

const ChatList = () => {
  return (
    <List className={s.list}>
      {chats.map((chat) => (
        <ListItem button>
          <ListItemText key={chat.id} primary={chat.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default ChatList;