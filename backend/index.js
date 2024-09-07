const PORT = 9001
const URLDB = 'mongodb://localhost:27017'

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User.js')

const app = express()

app.use(cors())
app.use(express.json())

app.post('/registration', async (req, res) => {
    console.log(req.body)
    const {login, password, email} = req.body
    const user = new User({login, password, email})
    await user.save()
    res.json({
        message: 'Вы успешно зарегестрировались!'
    })
})
app.post('/login', async (req, res) => {
    console.log(req.body)
    const {login, password} = req.body
    const user = await User.findOne({login})
    if(!user){
        return res.status(400).json({message: 'Пользователь не найдет'})
    }
    if(user.password !== password){
        return res.status(400).json({message: 'Неверный логин или пароль'})
    }
    const token = generateAccessToken(user._id)
    res.json({
        message: 'Вы успешно авторизованы!',
        token: token
    })
})

const start = async() => {
    try{
        await mongoose.connect(URLDB, {authSource: "admin"})
        app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порте`))
    } catch (e){
        consoke.log(e)
    }
}

start()