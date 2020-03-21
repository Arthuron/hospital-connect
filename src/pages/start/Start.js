import React from "react";
import {Button, Container, TextField, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";

export default function Start() {
    return (
        <Container fixed>
            <Container fixed>
                <Box p={1}>
                    <Typography variant="h4">
                        Anmelden
                    </Typography>
                </Box>
                <Box p={1} pb={0}>
                    <TextField id="username" label="Benutzer" fullWidth={true}/>
                </Box>
                <Box p={1} pb={0}>
                    <TextField id="password" label="Passwort" type="password" autoComplete="current-password" fullWidth={true}/>
                </Box>
                <Box p={1} pb={0} textAlign="right">
                    <Button color="link">
                        Passwort vergessen
                    </Button>
                </Box>
                <Box p={1} pt={5} bgcolor="background.paper">
                    <Button variant="contained" color="primary" fullWidth={true}>
                        Anmelden
                    </Button>
                </Box>
                <Box p={1} pt={0} bgcolor="background.paper">
                    <Button variant="outlined" color="primary" fullWidth={true}>
                        Registrieren
                    </Button>
                </Box>
            </Container>
        </Container>
    );
}
