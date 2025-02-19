import React from 'react'
import ChatProvider from '../../Context/ChatProvider.jsx';
import { ChatState } from '../../Context/ChatProvider.jsx';

import { Box, Button, Stack, useToast, Text } from '@chakra-ui/react';
import SingleChat from './SingleChat.js';
const ChatBox = (fetchAgain,setFetchAgain) => {
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
    >
      <SingleChat/>
      
      </Box>


  )
}

export default ChatBox
