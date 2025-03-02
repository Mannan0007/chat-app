import { Button, FormControl, FormLabel, Input, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import '../styles/ContactUs.css';
import NavBar from './NavBar';
import Footer from './Footer';
const ContactUs = () => {
  return (
    <>
      <NavBar />

      <div className="contact-body">
        <div className="contact-container">
          {/* <div className="contact-us-heading">
            <h1>
              Have something in mind? <br />
              <span id='feelfree'>Feel free to contact us</span>
            </h1>
          </div> */}
          <VStack className="container2">
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Please Enter your email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Your Message or Query</FormLabel>

              <Textarea
                height={"240px"}
                placeholder="Write your message here..."
              />
            </FormControl>

            <Button margin={"10px"}>Send</Button>
          </VStack>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs
