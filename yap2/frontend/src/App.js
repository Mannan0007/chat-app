import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";
function App() {
  return (
    <div className="App">
<Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/chats" element={<ChatPage />} />
</Routes>

    </div>
  );
}

export default App;
