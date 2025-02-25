import React, { useState } from 'react'
import { Box, Button, FormControl, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, useDisclosure, useToast } from '@chakra-ui/react'
import UserBadgeItem from '../../UserAvatar/UserBadgeItem';
import UserListItem from '../../UserAvatar/UserListItem';
import { ChatState } from '../../../Context/ChatProvider';
import { ViewIcon } from '@chakra-ui/icons';
import axios from 'axios';




const UpdateGroupChatModal = ({ fetchMessages, fetchAgain, setFetchAgain }) => {
    
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [groupChatName, setGroupChatName] = useState();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [renameloading, setRenameLoading] = useState(false);
  const toast = useToast();


    const {selectedChat,setSelectedChat,user}=ChatState()

const handleRename = async () => {
  if (!groupChatName) return;

  try {
    setRenameLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    };

    const response = await axios.put(
      `http://localhost:2000/api/chat/rename`,
      {
        chatId: selectedChat?._id,
        chatName: groupChatName,
      },
      config
    );

    if (!response || !response.data) {
      throw new Error("Invalid response from server");
    }

    console.log("Updated Chat ID:", response.data._id);
    setSelectedChat(response.data);
    setFetchAgain(!fetchAgain);

    // Show success toast
    toast({
      title: "Success!",
      description: "Group name updated successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom",
    });
  } catch (error) {
    console.error("Rename Error:", error);

    // Show error toast only if there's a real error
    toast({
      title: "Error Occurred!",
      description: error?.response?.data?.message || "Something went wrong!",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
  } finally {
    setRenameLoading(false);
    setGroupChatName(""); // Reset input field after API call
  }
};

  const handleSearch = async (query) => {
  setSearch(query);
  if (!query) {
    return;
  }

  try {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const { data } = await axios.get(`http://localhost:2000/api/user?search=${search}`, config);
    console.log(data);
    setLoading(false);
    setSearchResult(data);
  } catch (error) {
    toast({
      title: "Error Occured!",
      description: "Failed to Load the Search Results",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "bottom-left",
    });
    setLoading(false);
  }
  };
  
const handleAddUser = async (user1) => {
    if (selectedChat.users.find((u) => u._id === user1._id)) {
      toast({
        title: "User Already in group!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    if (selectedChat.groupAdmin._id !== user._id) {
      toast({
        title: "Only admins can add someone!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.put(
        `http://localhost:2000/api/chat/groupadd`,
        {
          chatId: selectedChat._id,
          userId: user1._id,
        },
        config
      );

      setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
    setGroupChatName("");
  };


 const handleRemove = async (user1) => {
    if (selectedChat?.groupAdmin?._id !== user?._id && user1?._id !== user?._id) {
      toast({
        title: "Only admins can remove someone",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      };

      const { data } = await axios.put(
        `http://localhost:2000/api/chat/groupremove`,
        {
          chatId: selectedChat?._id,
          userId: user1?._id,
        },
        config
      );

      user1?._id === user?._id ? setSelectedChat() : setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      fetchMessages();
      setLoading(false);
      // if (typeof setFetchAgain === "function") {
      //   setFetchAgain(!fetchAgain);
      // } else {
      //   console.warn("setFetchAgain is not defined or not a function");
      // }

    } catch (error) {
      // console.error("Error removing user:", error);

      toast({
        title: "Error occurred",
        description: error?.response?.data?.message || "Something went wrong!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } finally {
      setLoading(false);
      setGroupChatName("");
    }
  };

 return (
    <>
      <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize="35px"
            fontFamily="Work sans"
            display="flex"
            justifyContent="center"
          >
            {selectedChat.chatName}
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody display="flex" flexDir="column" alignItems="center">
            <Box w="100%" display="flex" flexWrap="wrap" pb={3}>
              {selectedChat.users.map((u) => (
                <UserBadgeItem
                  key={u._id}
                  user={u}
                  admin={selectedChat.groupAdmin}
                  handleFunction={() => handleRemove(u)}
                />
              ))}
            </Box>
            <FormControl display="flex">
              <Input
                placeholder="Chat Name"
                mb={3}
                value={groupChatName}
                onChange={(e) => setGroupChatName(e.target.value)}
              />
              <Button
                variant="solid"
                colorScheme="teal"
                ml={1}
                isLoading={renameloading}
                onClick={handleRename}
              >
                Update
              </Button>
            </FormControl>
            <FormControl>
              <Input
                placeholder="Add User to group"
                mb={1}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </FormControl>

            {loading ? (
              <Spinner size="lg" />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => handleAddUser(user)}
                />
              ))
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => handleRemove(user)} colorScheme="red">
              Leave Group
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateGroupChatModal;
