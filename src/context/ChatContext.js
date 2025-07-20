import React, { createContext, useState, useContext } from 'react';
import { mockUsers } from '../data/mockUsers';
import { UserContext } from './UserContext';
import { sendPushToUser } from '../api/api';

sendPushToUser(targetId, {
  title: currentUser.name,
  message: text,
});

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [users, setUsers] = useState(mockUsers);
  const { currentUser } = useContext(UserContext);

  const sendMessage = (targetId, text, isGroup = false) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newUsers = users.map((user) => {
      if (user.id === targetId) {
        return {
          ...user,
          chats: [
            ...user.chats,
            {
              sender: currentUser.id,
              message: text,
              timestamp,
            },
          ],
        };
      }
      return user;
    });

    setUsers(newUsers);
  };

  return (
    <ChatContext.Provider value={{ users, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
