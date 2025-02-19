import express from 'express'
import protect from '../middleware/authMiddleware.js';
import { accessChat,fetchChats,createGroupChat,removeFromGroup,renameGroupChat,addToGroup } from '../controllers/chatController.js';


const chatRoutes = express.Router();

chatRoutes.route("/").post(protect, accessChat);
chatRoutes.route("/").get(protect, fetchChats);
chatRoutes.route("/group").post(protect, createGroupChat);
chatRoutes.route("/rename").put(protect, renameGroupChat);
chatRoutes.route("/groupAdd").put(protect, addToGroup);
chatRoutes.route("/groupRemove").put(protect, removeFromGroup);

export default chatRoutes;
