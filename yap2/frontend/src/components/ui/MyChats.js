import { Box, Button, Stack, useToast,Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { ChatState } from '../../Context/ChatProvider';
import axios from 'axios';
import { AddIcon } from "@chakra-ui/icons";
import { useCallback } from 'react';
import ChatLoading from './ChatLoading';
import { getSender } from '../../config/chatLogics';
import GroupChatModal from './miscellaneous/GroupChatModal';
const MyChats = ({fetchAgain}) => {
  const [loggedUser, setLoggedUser] = useState();

  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();
  
  const toast = useToast();

  const fetchChats = async () => {
      // console.log(user._id);

  // if (!user || !user.token) {
  //   console.error("User not found. Redirecting to login.");
  //   return;
  // }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

    const { data } = await axios.get("http://localhost:2000/api/chat", config);
    console.log("Fetched Chats:", data); // Debugging
    setChats(data);
  } catch (error) {
    console.error("Fetch Chats Error:", error.response);
    toast({
      title: "Error Occurred!",
      description: error.response?.data?.message || "Failed to load chats",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "bottom-left",
    });
  }
};

useEffect(() => {
  setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
  fetchChats();
}, [fetchAgain]);


  return (
 
    <Box
          d={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir="column"
      alignItems="center"
      p={3}
      bg="white"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box
       pb={3}
        px={3}
        fontSize={{ base: "28px", md: "25px" }}
        fontFamily="Work sans"
        display="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >

        My Chats

        <GroupChatModal>

        <Button
         d="flex"
         fontSize={{ base: "17px", md: "10px", lg: "17px" }}
         rightIcon={<AddIcon />}
         
         >New Group Chat</Button>
         </GroupChatModal>

      </Box>
      <Box
       d="flex"
        flexDir="column"
        p={3}
        bg="#F8F8F8"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        {chats ? (
          <Stack overflow={'scroll'} >
            {chats.map((chat) => (
              <Box
              onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                color={selectedChat === chat ? "white" : "black"}
                px={3}
                py={2}
                borderRadius="lg"
                key={chat._id}
              >
                <Text>
                  {!chat.isGroupChat?getSender(loggedUser,chat.users):chat.chatName}
                </Text>
                
                </Box>
              ))}


          </Stack>
        ): (
            <ChatLoading/>
          )}
        
      </Box>

    </Box>

  )
}

export default MyChats
