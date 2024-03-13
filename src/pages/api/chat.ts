import { NextApiResponse, NextApiRequest } from 'next';
import { Server, Socket } from 'socket.io';
import type { Server as HTTPServer } from 'http';
import type { Socket as NetSocket } from 'net';

interface SocketServer extends HTTPServer {
  io?: Server | undefined;
}

interface SocketWithIO extends NetSocket {
  server: SocketServer;
}

interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithIO;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponseWithSocket,
) {
  const io = new Server(res.socket.server);

  res.socket.server.io = io;

  if (res.socket.server.io) {
    io.on('connection', socket => {
      socket.setMaxListeners(20);

      socket.on('message', msg => {
        io.emit('message', msg);
      });
    });
  }

  res.end();
}
