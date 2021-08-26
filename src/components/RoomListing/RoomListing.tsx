import React from 'react';
import {Link} from "react-router-dom";

interface RoomListingProps {
    owner: string;
    description: string;
    roomName: string
}

const RoomListing: (props: RoomListingProps) => JSX.Element = (props) => {
    const {owner, description, roomName} = props;
    return (
        <Link to={{
            pathname: `/room/${roomName}`,
            state:{ owner, description, roomName}}}>
            <div className="w-screen mx-auto flex justify-center space-x-4">
                <div className='flex w-8/12 md:w-6/12 lg:w-5/12 p-6 flex-col bg-white rounded-xl shadow-md'>
                    <p className="text-black">{props.roomName}</p>
                    <p className="text-gray-500">{props.description}</p>
                    <div className="text-sm font-medium text-gray-400 w-100 flex justify-end">owned
                        by: {props.owner}</div>
                </div>
            </div>
        </Link>

    )
}

export {RoomListing};