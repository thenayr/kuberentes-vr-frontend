const express = require('express');
const bodyParser = require ('body-parser');
const path = require('path');
const app = express();

const server = app.listen(3000, () => {
    console.log('Listening on *:3000');
})

const io = require ('socket.io')(server);

app.use('/assets', express.static(path.join('src', 'assets')));

app.use('/build', express.static('build'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('connected to socketio');
});