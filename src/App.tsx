import React, {useState, useEffect} from 'react'
import './App.css'

function App() {
    return (
        <div className="App">
            <header className="mb-4">
                <h1 className="text-center text-5xl">Video Chat App</h1>
            </header>

            <main>
                <div className="flex justify-center">
                    <div>
                        <h2 className="text-center text-4xl inline mr-6">Rooms</h2>
                        <button
                            className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 text-left">Create
                            new room
                        </button>
                    </div>

                </div>
                <ul>
                    <li>
                        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                            <div>
                                <div className="text-xl font-medium text-black">ChitChat</div>
                                <p className="text-gray-500">You have a new message!</p>
                            </div>
                        </div>
                    </li>

                </ul>
            </main>
        </div>
    )
}

export default App
