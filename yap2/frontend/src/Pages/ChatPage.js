import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const [error, setError] = useState(null); // For error handling

  const fetchChats = async () => {
    try {
      const response = await axios.get("/api/chat"); // Fetch data from the API
      setChats(response.data); // Set the fetched data to the state
    } catch (err) {
      setError("Failed to load chats. Please try again."); // Handle errors gracefully
      console.error(err);
    }
  };

  useEffect(() => {
    fetchChats(); // Fetch chats when the component mounts
  }, []);

  return (
    <div>
      {error ? (
        <div style={{ color: "red" }}>{error}</div> // Display error message if any
      ) : (
        chats.map((chat) => <div key={chat._id}>{chat.chatName}</div>)
      )}
    </div>
  );
};

export default ChatPage;
