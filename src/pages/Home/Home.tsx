import React, {useContext} from 'react';
import {Button} from "../../components/Button/Button";
import {RoomListing} from "../../components/RoomListing/RoomListing";
import {Link} from "react-router-dom";
import {RoomContext} from "../../data/RoomsStateContainer/RoomsStateContainer";

const Home: () => JSX.Element = () => {
    const rooms = useContext(RoomContext);

    return (
        <div>
            <header className="m-10">
                <h1 className="text-center text-5xl">Video Chat App</h1>
                <p className="text-center mt-2">By Daniel Lee</p>
            </header>

            <main>
                <div className="flex justify-center mb-10">
                    <div>
                        <h2 className="text-center text-4xl inline mr-6">Rooms</h2>
                        <Link to="/rooms/create">

                        <Button text="Create New Room"/>
                        </Link>
                    </div>

                </div>
                <ul>
                    {rooms !== undefined && rooms.map((room, index) => (
                        <li className="mb-7" key={room.roomName + index}>
                            <RoomListing roomName={room.roomName} owner={room.createdBy} description={room.description}/>
                        </li>
                    ))}

                </ul>
            </main>
        </div>
    )
}

export { Home };