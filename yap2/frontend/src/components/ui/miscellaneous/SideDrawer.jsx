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
const SideDrawer = () => {
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingChat, setLoadingChat] = useState()
    
    const { user,selectedChat, setSelectedChat ,chats,setChats} = ChatState();
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

      const data = await axios.post('http://localhost:2000/api/chat', { userId }, config);
      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);


      setSelectedChat(data);
      setLoadingChat(data);
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
                      <i class="fas fa-search"></i>
                      <Text d={{base:"none", md:'flex'}} px={'4'}>Search User</Text>
                  </Button>
              </Tooltip>

              <Text fontSize={'2xl'} fontFamily={'Work-sans'}>Cloud Connet</Text>

              <div>
                  <Menu>
                      <MenuButton p={1}>
                    <BellIcon  fontSize="2xl" m={1}/>
                      </MenuButton>
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
