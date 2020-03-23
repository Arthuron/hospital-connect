import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import LayoutWrapper from "../../components/layoutWrapper/LayoutWrapper";

import DialogBoxForButton from "../../components/dialogBoxForButton/DialogBoxForButton";
export default function Start() {
    return (
        <>
            <LayoutWrapper
                headline={"Anmelden"}
                footer={
                    <>
                        <Box p={1} pt={5} bgcolor="background.paper">
                            <DialogBoxForButton
                                buttonProps={{
                                    variant: "contained",
                                    color: "primary",
                                    fullWidth: true,
                                    disableElevation: true
                                }}
                                buttonLabel="Anmelden"
                            />
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
                    <DialogBoxForButton
                        buttonProps={{
                            color: "default"
                        }}
                        buttonLabel="Passwort vergessen"
                    />
                </Box>
            </LayoutWrapper>
        </>
    );
}
