import React, {FormEvent} from 'react';
import {TextInput} from "../../components/TextInput/TextInput";
import {Button} from "../../components/Button/Button";

const CreateRoom: () => JSX.Element = () => {
    function submitHandler(event: FormEvent<HTMLFormElement>) : void {
        event.preventDefault();
        const pc = new RTCPeerConnection();
        console.log(pc);
    }

    return <div>
        <form onSubmit={(event) => submitHandler(event)}>
            <h2 className="m-5 text-4xl">Create New Room</h2>
            <TextInput name="createdBy" label="Created By"/>
            <TextInput name="description" label="Description"/>
            <Button text="Create Room" type="submit"/>
        </form>
    </div>
}

export {CreateRoom};