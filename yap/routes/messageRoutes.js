import express from 'express'
import protect from '../middleware/authMiddleware.js'
import { sendMessage,allMessages } from '../controllers/messageControllers.js';
const Router = express.Router();


Router.route('/').post(protect,sendMessage)
Router.route('/:chatId').get(protect, allMessages)


export default Router;