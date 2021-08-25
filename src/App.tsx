import React from 'react'
import './App.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {Home} from "./pages/Home/Home";
import {DefaultLayout} from "./layouts/DefaultLayout/DefaultLayout";
import {CreateRoom} from "./pages/CreateRoom/CreateRoom";

function App() {
    return (
        <Router>
            <div className="App bg-gray-600">
                <Switch>
                    <DefaultLayout>
                        <Route exact path="/rooms">
                            <Home/>
                        </Route>
                        <Route path="/rooms/create">
                            <CreateRoom />
                        </Route>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                    </DefaultLayout>
                </Switch>

            </div>
        </Router>

    );
}

export default App
