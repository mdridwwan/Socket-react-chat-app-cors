const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);
const {Server} = require('socket.io');

const io = new Server(expressServer);
