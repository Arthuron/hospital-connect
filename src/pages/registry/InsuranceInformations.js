import React from "react";
import PropTypes from "prop-types";
import { Button, TextField, Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Link as RouterLink } from "react-router-dom";
import LayoutWrapper from "../../components/layoutWrapper/LayoutWrapper";

const InsuranceInformations = ({ onNext = () => {} }, onBack) => {
    return (
        <LayoutWrapper
            headline={"Registrieren"}
            onBack={ {linkTo: '/'} }
            footer={
                <Box pb={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth={true}
                        disableElevation
                        component={RouterLink}
                        to="/recordstock"
                    >
                        Jetzt registrieren
                    </Button>
                </Box>
            }
        >
            <Typography variant="h6" gutterBottom>
                Erzähl uns etwas über das Krankenhaus
            </Typography>
            <Box pb={1}>
                <TextField variant="outlined" fullWidth id="contact" label="Kontaktperson" />
            </Box>
            <Box pb={1}>
                <TextField variant="outlined" fullWidth id="insurance" label="Krankenkasse" />
            </Box>

            <Grid container spacing={2} p={2}>
                <Grid item xs={6}>
                    <Box pb={1}>
                        <TextField variant="outlined" fullWidth id="postalcode" label="Plz" />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box pb={1}>
                        <TextField variant="outlined" fullWidth id="city" label="Ort" />
                    </Box>
                </Grid>
            </Grid>

            <Box pb={1}>
                <TextField variant="outlined" fullWidth id="telefon" label="Telefon" />
            </Box>
            <Box pb={1}>
                <TextField variant="outlined" fullWidth id="email" label="E-Mail" />
            </Box>
        </LayoutWrapper>
    );
};

InsuranceInformations.propTypes = {
    onNext: PropTypes.func
};

InsuranceInformations.defaultProps = {};

export default InsuranceInformations;
