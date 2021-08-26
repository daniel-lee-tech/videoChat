import React, {useState, useEffect, createContext, ReactChild, useContext} from "react";
import {SocketContext} from "../SocketContext/SocketContext";

interface RoomsStateContainerProps {
    children: ReactChild
}

interface IRoom {
    roomName: string,
    description: string,
    createdBy: string
}

const RoomContext = createContext<IRoom[] | undefined>(undefined);

const RoomsStateContainer: (props: RoomsStateContainerProps) => JSX.Element = ({children}) => {
    const [rooms, setRooms] = useState<IRoom[] | undefined>();
    const socket = useContext(SocketContext);
    socket.on("new room", (newRoom) => {
        if (rooms != undefined) {
            setRooms([...rooms, newRoom])
        }
    });

    useEffect(() => {
        fetch('http://localhost:3001/rooms').then(result => {
            // RoomContext.rooms = result;
            fetch('http://localhost:3001/rooms')
                .then(result => result.json())
                .then(json => setRooms(json));
        })
    }, []);

    return (<RoomContext.Provider value={rooms}>
        {children}
    </RoomContext.Provider>)

}

export {RoomsStateContainer, RoomContext}