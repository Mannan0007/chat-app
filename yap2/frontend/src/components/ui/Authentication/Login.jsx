import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = () => setShow(!show);

  return (
    <VStack>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder="Enter your email" />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>

        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
          />
          <InputRightElement>
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button colorScheme="green" onClick={handleClick}>
        Login
      </Button>

      <Button
        colorScheme="red"
        variant={"solid"}
        width={"100%"}
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("12345678");
        }}
      >
        Get user credentials
      </Button>
    </VStack>
  );
};

export default Login;
