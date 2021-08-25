import React from 'react';

interface RoomListingProps {
    owner: String;
    description: String;
}

const RoomListing: (props: RoomListingProps) => JSX.Element = (props) => {
    return (<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
            <div className="text-xl font-medium text-black">{props.owner}</div>
            <p className="text-gray-500">{props.description}</p>
        </div>
    </div>)
}

export {RoomListing};