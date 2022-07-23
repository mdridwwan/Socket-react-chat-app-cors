const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const expressServer = http.createServer(app);
const {Server} = require('socket.io');

const port = 4500 || process.env.PORT;
const io = new Server(expressServer);

app.use(cors());
///

app.get('/', (req,res)=>{
    res.send('hellow server')
})

io.on('connection', (sockets)=>{
    console.log("new user connected");
    sockets.on('disconnect', ()=>{
        console.log("user disconnected");
    })
})


expressServer.listen(port, ()=>{
    console.log("server is running port: http://localhost:", (port))
})