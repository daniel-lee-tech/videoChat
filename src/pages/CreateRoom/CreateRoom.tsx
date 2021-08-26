import React, {FormEvent, useContext} from 'react';
import {TextInput} from "../../components/TextInput/TextInput";
import {Button} from "../../components/Button/Button";
import {SocketContext} from "../../data/SocketContext/SocketContext";

const CreateRoom: () => JSX.Element = () => {
    function submitHandler(event: FormEvent<HTMLFormElement>) : void {
        event.preventDefault();
            const formData = new FormData(event.target as HTMLFormElement);
            const formValueObject = Object.fromEntries(formData);

        // const pc = new RTCPeerConnection();
        // console.log(pc);
        const socket = useContext(SocketContext)
        socket.on("connect", () => {
            socket.emit('create room', formValueObject);
        });

    }

    return <div>
        <form onSubmit={(event) => submitHandler(event)}>
            <h2 className="m-5 text-4xl">Create New Room</h2>
            <TextInput name="roomName" label="Unique Room Name"/>
            <TextInput name="description" label="Description"/>
            <TextInput name="createdBy" label="Created By"/>
            <Button text="Create Room" type="submit"/>
        </form>
    </div>
}

export {CreateRoom};