import React, {FormEvent, useContext, useEffect, useState} from "react";
import {ChatBubble} from "../ChatBubble/ChatBubble";
import {SocketContext} from "../../data/SocketContext/SocketContext";

type ChatContainerProps = {
    roomName: string;
    userName: string;
} & typeof defaultProps;

const defaultProps = {
    userName: 'makeMe'
}

const ChatContainer: React.FC<ChatContainerProps> = (props) => {
    useEffect(() => {
        // this has to be in a useEffect hook because react rerender will run this multiple times if not.
        socket.on(`chat message`, data => {
            setMessages((prevState) => [...prevState, data])
        });
    }, []);

    const {userName, roomName} = props;

    interface IMessage {
        message: string;
        userName: string;
    }

    const [messages, setMessages] = useState<IMessage[]>([])
    const [message, setMessage] = useState('');

    const socket = useContext(SocketContext);

    function submitHandler(event: FormEvent) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const message = Object.fromEntries(formData).message;
        socket.emit(`chat message`, {userName, message});
        setMessage('');
    }

    return (
        <div className="container mx-auto text-center h-screen">
            chat
            <div id="chatBubbles" className="overflow-y-scroll bg-gray-700 rounded border-gray-50 h-4/5 w-11/12 mx-auto flex flex-col">
                {messages.map((data, i) =>
                    <ChatBubble
                        key={i}
                        chatType={userName == data.userName ? 'outgoing' : 'incoming'}
                        message={data.message}
                    />
                )}
                {messages.length}
            </div>

            <form onSubmit={(event: FormEvent) => submitHandler(event)}>
                <input
                    onChange={(event) => setMessage(event.target.value)}
                    value={message}
                    id="chatInput"
                    name="message"
                    type="text"
                    className="w-11/12 rounded text-black"
                />
            </form>
        </div>
    )
}

ChatContainer.defaultProps = defaultProps;
export {ChatContainer};