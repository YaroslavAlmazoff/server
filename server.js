const express = require("express")
const cors = require("cors")
const path = require("path")
const fs = require('fs')

const app = express()

process.on('uncaughtException', err => {
    console.error(err)
    console.log("Node NOT Exiting...")
})// Теперь сервер не останавливается при ошибках

app.use(cors())
app.get("/", (req, res) => {
    fs.readFile('somefile.txt', (err, data) => {
        if(err) throw err
        console.log(data)
    }) //Намеренно вызываем ошибку
    //Произошла ошибка и сервер больше не работает
    res.sendFile(path.resolve("client", "index.html"))
})

app.listen(9000, () => {
    console.log("Сервер запущен...")
})