import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();


  const navigate = useNavigate();


  // useEffect(() => {
  //   const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  //   if (userInfo && userInfo.token) {
  //     setUser(userInfo); // ✅ Only set user if valid
  //   } else {
  //     localStorage.removeItem("userInfo"); // 🔴 Clear old invalid data
  //     navigate('/'); // Redirect only if userInfo is missing
  //   }
  // }, []);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (!user) {
      navigate("/"); // If no user, send back to login
    } else {
      setUser(user); // Update user state
    }
  }, []);

  return (
<ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}
export const ChatState = () => {
  
 return useContext(ChatContext)
}

export default ChatProvider;
 