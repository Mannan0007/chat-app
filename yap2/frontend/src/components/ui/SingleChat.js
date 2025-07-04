import React, { useEffect, useState } from 'react'
import { ChatState } from '../../Context/ChatProvider'
import { Box, FormControl, IconButton, Input, Spinner, Text, Toast, useToast } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { getSender,getSenderFull } from '../../config/chatLogics';
import ProfileModal from './miscellaneous/ProfileModal';
import UpdateGroupChatModal from './miscellaneous/UpdateGroupChatModal';
import axios from 'axios';
import './style.css';
import ScrollableChat from './ScrollableChat';
import Lottie from 'react-lottie'
import io from 'socket.io-client';
import animationData from '../../animations/typing.json'
import bgimg from '../../images/chat-background.png'
const ENDPOINT = 'http://localhost:2000';

var socket, selectedChatCompare;
const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState();
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [istyping, setIsTyping] = useState(false);
  const toast = useToast();
   
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { selectedChat, setSelectedChat, user, notification, setNotification } = ChatState();

  const sendMessage = async (event) => {
    if (event.key === "Enter" && newMessage) {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };
        setNewMessage("");
        const { data } = await axios.post(
          "http://localhost:2000/api/message",
          {
            content: newMessage,
            chatId: selectedChat._id,
          },
          config
        );
        // console.log(data);
        socket.emit("new message", data);

        setMessages([...messages, data]);
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: "Failed to send the Message",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        
      }
    }
      
  }

  const fetchMessages = async () => {
    if (!selectedChat) return;
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      setLoading(true);

      const { data } = await axios.get(
        `http://localhost:2000/api/message/${selectedChat._id}`,
        config
      );

      setMessages(data);

    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Messages",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } finally {
      setLoading(false);
      socket.emit('join chat', selectedChat._id);

    }
  };


    useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
      socket.on('connected', () => setSocketConnected(true));
      socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));

  }, []);

useEffect(() => {
  if (selectedChat) {
    fetchMessages();
    selectedChatCompare = selectedChat;
  }
}, [selectedChat]);
// console.log(notification,"------------")

useEffect(() => {
  socket.on("message received", (newMessageRecieved) => {

    if (!selectedChat || selectedChat._id !== newMessageRecieved.chat._id) {

      if (!notification.includes(newMessageRecieved)) {
        setNotification([newMessageRecieved, ...notification]);
          setFetchAgain(!fetchAgain);
      }
      // console.log(" Message from another chat, not updating UI");
    } else {
      // console.log("Message belongs to the current chat, updating UI");
      setMessages((prevMessages) => [...prevMessages, newMessageRecieved]);
    }
  });

  return () => {
    socket.off("message received"); // Cleanup to avoid duplicate listeners
  };
}, [selectedChat]);  // Ensure this updates when chat changes

  const typingHandler = (e) => {
    setNewMessage(e.target.value);

     if (!socketConnected) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", selectedChat._id);
    }
    let lastTypingTime = new Date().getTime();
    var timerLength = 3000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", selectedChat._id);
        setTyping(false);
      }
    }, timerLength);
      
  }

    
    
  return (
    <>
      {selectedChat ? (
        <>
          <Text
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Work sans"
            display="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
          >
            <IconButton
              d={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat("")}
            />

            {!selectedChat.isGroupChat ? (
              <>
                {getSender(user, selectedChat.users)}
                <ProfileModal user={getSenderFull(user, selectedChat.users)} />
              </>
            ) : (
              <>
                {selectedChat.chatName.toUpperCase()}
                <UpdateGroupChatModal
                  fetchMessages={fetchMessages}
                  fetchAgain={fetchAgain}
                  setFetchAgain={setFetchAgain}
                />
              </>
            )}
          </Text>

          <Box
            display="flex"
            flexDir="column"
            justifyContent="flex-end"
            p={3}
            // bg={bgimg}
            w="100%"
            h="100%"
            borderRadius="lg"
            overflowY="hidden"
            backgroundImage={`url(${bgimg})`} // Set background image
            // backgroundSize="cover" // Cover the full box
            backgroundPosition="center" // Center the image
            backgroundColor="rgba(0, 0, 0, 0.5)" // Dark semi-transparent overlay
            backgroundBlendMode="overlay" // Blend the color with the image
          
             >
            {loading ? (
              <Spinner
                size="xl"
                w={20}
                h={20}
                alignSelf="center"
                margin="auto"
              />
            ) : (
              <div className="messages">
                <ScrollableChat messages={messages} />
              </div>
            )}



            <FormControl
              onKeyDown={sendMessage}
              id="first-name"
              isRequired
              mt={3}
              // backgroundColor={'grey'}
              color={'white'}
              >
              {istyping ? (
                <div>
                  <Lottie
                    options={defaultOptions}
                    // height={50}
                    width={70}
                    style={{ marginBottom: 15, marginLeft: 0 }}
                  />
                </div>
              ) : (
                <></>
              )}
              <Input
                variant="filled"
                bg="#E0E0E0"
                placeholder="Enter a message.."
                onChange={typingHandler}
                value={newMessage}
                />
            </FormControl>
          </Box>
        </>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="100%"
        >
          <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </>
  );
}

export default SingleChat
