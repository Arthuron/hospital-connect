import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Start from "./pages/start/Start";
import Editstock from "./pages/editstock/Editstock";
import RecordStockContainer from "./containers/recordStockContainer/RecordStockContainer";
import MapContainer from "./containers/mapContainer/MapContainer";
import RegistryContainer from "./containers/registryContainer/RegistryContainer";
import fetchHospitals from "./redux/reducers/hospitals/fetchHospitals";
import { useDispatch } from "react-redux";


import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0f0f0f',
        },
        secondary: {
            main: '#FFD600'
        }
    },
});
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

const showDebugTopNavigation = false;

export default function BasicExample() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchHospitals());
    }, [dispatch]);
    return (

        <Router>
            <ThemeProvider theme={theme}>
            <div>
                {showDebugTopNavigation && (
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/edit">Edit Stock</Link>
                        </li>
                        <li>
                            <Link to="/registry">Registry</Link>
                        </li>
                        <li>
                            <Link to="/map">Map</Link>
                        </li>
                    </ul>
                )}
                {showDebugTopNavigation && <hr />}

                <Switch>
                    <Route exact path="/">
                        <Start />
                    </Route>
                    <Route path="/edit">
                        <Editstock />
                    </Route>
                    <Route exact path="/recordstock">
                        <RecordStockContainer />
                    </Route>
                    <Route path="/registry">
                        <RegistryContainer />
                    </Route>
                    <Route path="/map">
                        <MapContainer />
                    </Route>
                </Switch>
            </div>
            </ThemeProvider>
        </Router>
    );
}
