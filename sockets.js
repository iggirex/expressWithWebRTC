var io = require("socket.io")()

io.on('connection', function (socket)  {
  console.log( "THIS IS socket obj", socket.server.eio.clientsCount)
    console.log("THIS IS ioSOCKET clienst", io.sockets.clients)
  socket.on('peer-msg', function (data) {
    console.log('Message from peer: %s', data);
    socket.broadcast.emit('peer-msg', data);
  })

  socket.on('go-private', function (data) {
    socket.broadcast.emit('go-private', data);
  });
});

module.exports = io;
