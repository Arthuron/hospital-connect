import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import AdressBook from "./pages/adressbook/AdressBook";
import Registry from "./pages/registry/Registry";
import Login from "./pages/login/Login";

import RecordStockContainer from "./containers/recordStockContainer/RecordStockContainer";
import MapContainer from "./containers/mapContainer/MapContainer";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/adressbook">AdressBook</Link>
                    </li>
                    <li>
                        <Link to="/registry">Registry</Link>
                    </li>
                    <li>
                        <Link to="/map">Map</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/recordstock">Record Stock</Link>
                    </li>
                </ul>

                <hr />

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/adressbook">
                        <AdressBook />
                    </Route>
                    <Route exact path="/recordstock">
                        <RecordStockContainer />
                    </Route>
                    <Route path="/registry">
                        <Registry />
                    </Route>
                    <Route path="/map">
                        <MapContainer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
