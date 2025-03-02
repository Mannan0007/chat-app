import { Route, Routes} from "react-router-dom";
import "./App.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";
import StartingPage from "./extra/StartingPage";
import AboutMe from "./extra/Aboutme";
import ContactUs from "./extra/ContactUs";
import PrivacyPolicy from "./extra/PrivacyPolicy";

function App() {
  return (

    <div className="App">
<Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/home" element={<StartingPage />} />
  <Route path="/policy" element={<PrivacyPolicy/>} />
  <Route path="/contact-us" element={<ContactUs/>} />
  <Route path="/about-me" element={<AboutMe/>} />
        <Route path="/chats" element={<ChatPage />} />
</Routes>

    </div>
  );
}

export default App;
