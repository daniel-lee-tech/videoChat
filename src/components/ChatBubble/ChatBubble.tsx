import React from 'react';

interface ChatBubbleProps {
    chatType: 'incoming' | 'outgoing';
    message: string;
}

const ChatBubble: (props: ChatBubbleProps) => JSX.Element = (props) => {
    if (props.chatType == 'incoming') {
        return (
            <div className="bg-gray-100 rounded border-gray-50 mt-5 max-w-max p-2 px-3 text-left">
                <p className="text-black">{props.message}</p>
            </div>
        )
    } else {
        return (
            <div className="self-end bg-blue-500 rounded border-gray-50 mt-5 max-w-max p-2 px-3 text-right">
                <p className="text-black">{props.message}</p>
            </div>
        )
    }
}

export {ChatBubble};