import React, { use, useState } from "react";
import {
  Stack,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();

  const handlePasswordToggle = () => setShowPassword(!showPassword);
  const handleConfirmPasswordToggle = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const handleSubmit = () => {};

  const postDetails = (pics) => {};

  return (
    <VStack spacing="5px" color="black">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>

        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            onChange={(e) => setShowPassword(e.target.value)}
          />

          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handlePasswordToggle}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="confirm_password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleConfirmPasswordToggle}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="pic">
        <FormLabel>Upload your picture</FormLabel>

        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        ></Input>
      </FormControl>

      <Button
        colorScheme="blue"
        color={"black"}
        width={"100%"}
        borderWidth="1px"
        style={{ marginTop: 15 }}
        onClick={handleSubmit}
      >
        Sign up
      </Button>
    </VStack>
  );
};

export default Signup;
