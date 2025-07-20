import React, { createContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [unreadCounts, setUnreadCounts] = useState({}); // { userId: count }

  const incrementUnread = (userId) => {
    setUnreadCounts((prev) => ({
      ...prev,
      [userId]: (prev[userId] || 0) + 1,
    }));
  };

  const clearUnread = (userId) => {
    setUnreadCounts((prev) => ({
      ...prev,
      [userId]: 0,
    }));
  };

  return (
    <NotificationContext.Provider
      value={{ unreadCounts, incrementUnread, clearUnread }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
