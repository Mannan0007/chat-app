import { Button, Tooltip,Box,Text, Menu, MenuButton,MenuList,MenuItem,MenuDivider, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Input, useToast, Spinner } from '@chakra-ui/react'
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Avatar } from '@chakra-ui/react';
import React, { useState } from 'react'
import { ChatState } from '../../../Context/ChatProvider';
import ProfileModal from './ProfileModal';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import ChatLoading from '../ChatLoading';
import UserListItem from '../../UserAvatar/UserListItem';
import axios from 'axios';
import { getSender } from '../../../config/chatLogics';
import { Link } from 'react-router-dom';
import { Badge } from '@chakra-ui/react';

const SideDrawer = () => {
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(false)
  const [loadingChat, setLoadingChat] = useState(false);
    
    const { user,setSelectedChat ,chats,setChats,notification,setNotification} = ChatState();
    const navigate  = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const logoutHandler = () => {
        localStorage.removeItem("userInfo");
        navigate('/');
    }

    const handleSearch = async () => {
  if (!search) {
    toast({
      title: "Please Enter something in search",
      status: "warning",
      duration: 5000,
      isClosable: true,
      position: "top-left",
    });
    return;
  }

  try {
    setLoading(true);

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo || !userInfo.token) {
      throw new Error("User not authenticated. Please log in again.");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`, // ✅ Fixed spacing issue
      },
    };

const { data } = await axios.get(`http://localhost:2000/api/user?search=${search}`, config);
          setLoading(false);

    setSearchResult(data);
  } catch (error) {
    console.error("Search Error:", error);

    toast({
      title: "Error Occurred!",
      description: error.response?.data?.message || "Failed to Load the Search Results",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "bottom-left",
    });

    setSearchResult([]);
  } finally {
    setLoading(false);
  }
};

  const accessChat = async (userId) => {
    try {
      setLoadingChat(true);

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const {data} = await axios.post('http://localhost:2000/api/chat', { userId }, config);
      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);


      setSelectedChat(data);
      onClose();
    } catch (error) {
       toast({
        title: "Error fetching the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      
    }
    finally {
          setLoadingChat(false); // ✅ Always stops loading state

    }
    
  }


  return (
  <>
          <Box  display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px">
              <Tooltip label="Search Users to chat" hasArrow placement='bottom-end'>
                  <Button variant={'ghost'} onClick={onOpen}> 
                      <i className="fas fa-search"></i>
                      <Text display={{base:"none", md:'flex'}} px={'4'}>Search User</Text>
                  </Button>
              </Tooltip>

        <Link to={'/home'}>
        
        
        <Text fontSize={'2xl'} fontFamily={'Work-sans'}>Cloud Connet</Text>
        
        </Link>
{/* 
        <div>
          <Link to={'/home'} >
            <Text>About cloud connect</Text>
          </Link>
        </div> */}

              <div>

<Menu>
  <MenuButton p={1} position="relative">
    {notification.length > 0 && (
      <Badge
        colorScheme="red"
        borderRadius="full"
        fontSize="0.8em"
        position="absolute"
        top="-2px"
        right="-2px"
        px={2}
      >
        {notification.length}
      </Badge>
    )}
    <BellIcon fontSize="2xl" m={1} />
  </MenuButton>

  <MenuList pl={2}>
    {!notification.length && "No new Messages"}
    {notification.map((notif) => (
      <MenuItem
        key={notif._id}
        onClick={() => {
          setSelectedChat(notif.chat);
          setNotification(notification.filter((n) => n !== notif));
        }}
      >
        {notif.chat.isGroupChat
          ? `New Message in ${notif.chat.chatName}`
          : `New Message from ${getSender(user, notif.chat.users)}`}
      </MenuItem>
    ))}
  </MenuList>
</Menu>

                  <Menu>
            <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
                </MenuButton>
                            <MenuList>
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>{" "}
              </ProfileModal>    
              <MenuDivider />
              <MenuItem onClick={logoutHandler} >Logout</MenuItem>
            </MenuList>

                  </Menu>
              </div>
              
          </Box>
          

          <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                  <DrawerHeader>Search Users</DrawerHeader>
              <DrawerBody>
                  <Box d='flex' pb={2} >
                      <Input
                          placeholder="Search by name or email"
                    mr={2}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                      />
                      <Button onClick={handleSearch}>Go</Button>
            </Box>
            
            {loading ? (
              <ChatLoading/>
            ) : (
                searchResult?.map((user) => (
                  <UserListItem
                    key={user._id}
                    user={user}
                    handleFunction={()=>accessChat(user._id)}
                  />
                ))
            )}

            {loadingChat && <Spinner ml={'auto'} d='flex'  />}
              </DrawerBody>
              </DrawerContent>
                  
              
</Drawer>

      
      </>
  )
}

export default SideDrawer
