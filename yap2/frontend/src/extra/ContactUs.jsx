import { Button, FormControl, FormLabel, Input, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import '../styles/ContactUs.css';
import NavBar from './NavBar';
import Footer from './Footer';
const ContactUs = () => {
  return (
    <>
    
    <div className='contact-us-heading'>
<h1>Have something in mind?</h1>
      <h2>Feel free to contact us </h2>
         </div>
      <VStack backgroundColor={'white'} marginBottom={'20px'}  >
        <FormControl isRequired >
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            placeholder='Please Enter your email'
          />
        </FormControl>
        <FormControl  isRequired  >
          <FormLabel>Your Message or Query</FormLabel>
          
          <Textarea height={'240px'} placeholder="Write your message here..." />
         
         
     
        </FormControl>

        <Button margin={'10px'}  >Send</Button>

      </VStack>

      <Footer/>

 
</>


  )
}

export default ContactUs
