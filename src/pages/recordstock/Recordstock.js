import React from "react";
import {Button} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Recordstock() {
    return (
        <Container fixed>
            <Box p={1} bgcolor="background.paper">
                <Typography variant="h6" gutterBottom>
                    Welcome Virchow Klinikum Berlin
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    Wie kannst du uns oder wir dich Unterstützen ?
                </Typography>
            </Box>
            <Box p={1} bgcolor="background.paper">
                <Divider variant="middle"/>
            </Box>
            <Box p={1} bgcolor="background.paper">
                <Button color="default" variant="contained" fullWidth={true} to="/">Ich Brauche</Button>
            </Box>
            <Box p={1} pt={0} bgcolor="background.paper">
                <Button color="default" variant="contained" fullWidth={true}>Ich Biete</Button>
            </Box>

        </Container>
    );
}
