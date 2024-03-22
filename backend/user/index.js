import express from 'express'
const app = express()
const PORT = 3001 || process.env.PORT
import cors from 'cors'
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
 
import 'dotenv/config' 
import mongoConnect from './src/config/db.js'
mongoConnect(process.env.MONGO_URL)
import userRoute from './src/routes/userRoute.js'

app.use('/user',userRoute)
app.get('/user',(req,res)=>{
    res.send('This is user.')
})
 
app.listen(PORT,()=>{
    console.log('User server start @ 3001 !!')
})