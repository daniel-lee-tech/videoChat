import React, {useContext} from "react";
import {Location} from "history";
import {useLocation, useParams} from "react-router-dom";
import {ChatContainer} from "../../components/ChatContainer/ChatContainer";
import {SocketContext} from "../../data/SocketContext/SocketContext";


interface LocationStateProps {
    roomName: string;
}

const Room: () => JSX.Element = () => {
    // @ts-ignore
    let { roomName } = useParams();

    // const location = useLocation<Location>();
    // const state = location.state;
    const socket = useContext(SocketContext)
    socket.on("connect", () => {
        socket.emit('join', roomName);
    });


    // // note that you are defining the return type of this function using `is`
    // const hasRoomNameProps = (state: object | null | LocationStateProps): state is LocationStateProps => {
    //     // you use `as` here, but only so typescript doesn't yell at you while you access the property
    //     // specifically to test if it is there
    //     return (state as LocationStateProps).roomName !== undefined;
    // }
    //
    // function roomName() :string {
    //     return hasRoomNameProps(state) ? state.roomName : "error"
    // }

    return (
        <>
            {roomName}
            <div className="sm:flex-column lg:flex justify-around w-screen items-center">
                <div className="container mx-auto text-center">
                    you
                </div>
                <div className="container mx-auto text-center">
                    them
                </div>
                <ChatContainer roomName={roomName} userName="MakeMe" />
            </div>
        </>
    );
}

export {Room}