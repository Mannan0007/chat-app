import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { ChatState } from '../Context/ChatProvider'
import SideDrawer from '../components/ui/miscellaneous/SideDrawer';
import MyChats from '../components/ui/MyChats';
import ChatBox from '../components/ui/ChatBox';

const ChatPage = () => {
  const [fetchAgain,setFetchAgain]=useState(false)
  const { user } = ChatState();
  
  return (
    <div style={{width:"100%"}}>
        {user && <SideDrawer/>}
<Box 
  display="flex"  
  justifyContent={'space-between'} 
  w={'100%'} 
  h={'91.5vh'}  
  p={'10px'} 
  flexDir={'row'} 
>
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
      
    </div>
  )
}

export default ChatPage
