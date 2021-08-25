import React from 'react'
import './App.css'

import {Button} from './components/Button/Button';
import {RoomListing} from "./components/RoomListing/RoomListing";

function App() {
    return (
        <div className="App bg-gray-600">
            <header className="m-10">
                <h1 className="text-center text-5xl">Video Chat App</h1>
                <p className="text-right mt-2">By Daniel Lee</p>
            </header>

            <main>
                <div className="flex justify-center mb-10">
                    <div>
                        <h2 className="text-center text-4xl inline mr-6">Rooms</h2>
                        <Button text="Create New Room"/>
                    </div>

                </div>
                <ul>
                    <li>
                        <RoomListing owner={'Some user'} description={'Some Description'}/>
                    </li>
                </ul>
            </main>
        </div>
    )
}

export default App
