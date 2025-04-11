import React from "react";
import {
  Box,
  Center,
  Container,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";


import '../styles/HomePage.css';

// import { Table,Tabs,Box,Center,Container,Text, } from "@chakra-ui/react";
import Login from "../components/ui/Authentication/Login";
import Signup from "../components/ui/Authentication/Signup";

const Homepage = () => {
  return (
    <div className="backgroud-apna">
      <Container maxW="xl" centerContent>
        <Box
          display="flex"
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text
            fontSize="4xl"
            fontFamily="Work sans"
            color="black"
            textAlign={"center"}
          >
            Cloud Connect
          </Text>
        </Box>

        <Box
          d="flex"
          justifyContent="center"
          w="100%"
          p={4}
          bg="white"
          m="40px 0 15px 0 "
          borderRadius="lg"
          borderWidth="1px"
          color={"black"}
        >
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList mb="1em">
              <Tab width="50%">Login</Tab>
              <Tab width="50%">Sign up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
};

export default Homepage;
