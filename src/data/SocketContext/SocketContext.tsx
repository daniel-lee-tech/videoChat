import React, {createContext} from 'react';
import {io} from "socket.io-client";

const socket = io("ws://localhost:3001");

const SocketContext = createContext(socket);

export {SocketContext, socket};