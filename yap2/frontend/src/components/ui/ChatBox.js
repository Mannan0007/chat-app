import React from 'react'
import { Box} from '@chakra-ui/react';
import { ChatState } from '../../Context/ChatProvider.jsx';
import SingleChat from './SingleChat.js';
import '../../styles/ChatBox.css'
const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState()
  


  return (

    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
      className='chat-bg'
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      
      </Box>


  )
}

export default ChatBox;
