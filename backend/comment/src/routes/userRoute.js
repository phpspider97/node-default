import express from 'express'
const router = express.Router() 

import { userAdd,userList } from '../controllers/userController.js'

router.post('/add',userAdd)
router.get('/all',userList)

export default router