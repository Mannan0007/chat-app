import React from 'react'
import { isLastMessage, isSameSender, isSameSenderMargin, isSameUser } from '../../config/chatLogics';
import { ChatState } from '../../Context/ChatProvider';
import { Avatar, Tooltip } from '@chakra-ui/react'

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();

  return (
  
    <>
      
       <div
      style={{
        maxHeight: '400px', // Adjust the height as needed
        overflowY: 'auto',  // Enable vertical scrolling
        padding: '10px',
      }}
    >



{messages &&
        messages.map((m, i) => (
          <div style={{ display: "flex" }} key={m._id}>
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                <Avatar
                  mt="7px"
                  mr={1}
                  size="sm"
                  cursor="pointer"
                  name={m.sender.name}
                  src={m.sender.pic}
                />
              </Tooltip>
            )}
            <span
              style={{
                backgroundColor: `${
                  m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                }`,
                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
              }}
            >
              {m.content}
            </span>
          </div>
        ))}
      
</div>

      </>

  )
}

export default ScrollableChat
