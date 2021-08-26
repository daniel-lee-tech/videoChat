import React from 'react'
import './App.css'
import {io} from "socket.io-client";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {Home} from "./pages/Home/Home";
import {Room} from "./pages/Room/Room"
import {DefaultLayout} from "./layouts/DefaultLayout/DefaultLayout";
import {CreateRoom} from "./pages/CreateRoom/CreateRoom";
import {RoomsStateContainer} from "./data/RoomsStateContainer/RoomsStateContainer";
import {SocketContext, socket} from "./data/SocketContext/SocketContext";

function App() {
    return (
        <SocketContext.Provider value={socket}>
            <RoomsStateContainer>
                <Router>
                    <div className="App bg-gray-600">
                        <Switch>
                            <DefaultLayout>
                                <Route exact path="/room/:roomName">
                                    <Room/>
                                </Route>
                                <Route exact path="/rooms">
                                    <Home/>
                                </Route>
                                <Route path="/rooms/create">
                                    <CreateRoom/>
                                </Route>
                                <Route exact path="/">
                                    <Home/>
                                </Route>
                            </DefaultLayout>
                        </Switch>
                    </div>
                </Router>
            </RoomsStateContainer>
        </SocketContext.Provider>
    );
}

export default App
