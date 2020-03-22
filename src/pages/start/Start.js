import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import LayoutWrapper from "../../components/layoutWrapper/LayoutWrapper";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
export default function Start() {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <LayoutWrapper
                headline={"Anmelden"}
                footer={
                    <>
                        <Box p={1} pt={5} bgcolor="background.paper">
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth={true}
                                disableElevation
                                onClick={handleClick}
                            >
                                Anmelden
                            </Button>
                        </Box>
                        <Box p={1} pt={0} bgcolor="background.paper">
                            <Link to="/registry">
                                <Button variant="outlined" color="secondary" fullWidth={true} disableElevation>
                                    Registrieren
                                </Button>
                            </Link>
                        </Box>
                    </>
                }
            >
                <Box p={1} pb={0}>
                    <TextField variant="outlined" id="username" label="Benutzer" fullWidth={true} />
                </Box>
                <Box p={1} pb={0}>
                    <TextField
                        variant="outlined"
                        id="password"
                        label="Passwort"
                        type="password"
                        autoComplete="current-password"
                        fullWidth={true}
                    />
                </Box>
                <Box p={1} pb={0} textAlign="right">
                    <Button color="default" onClick={handleClick}>
                        Passwort vergessen
                    </Button>
                </Box>
            </LayoutWrapper>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Nicht implementiert im Prototypen</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Diese Funktion ist noch nicht implementiert. Bitte auf Registrieren klicken.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Schließen
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
