import React from "react";
import PropTypes from "prop-types";
import { Button, TextField, Grid, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link as RouterLink } from "react-router-dom";
import LayoutWrapper from "../../components/layoutWrapper/LayoutWrapper";

const PrivateInformations = ({ onNext = () => {} }) => {
    const [support, setSupport] = React.useState("");

    const handleChange = event => {
        setSupport(event.target.value);
    };
    return (
        <LayoutWrapper
            headline={"Registrieren"}
            footer={
                <>
                    <Box pb={1}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth={true}
                            disableElevation
                            component={RouterLink}
                            to="/map"
                        >
                            Jetzt registrieren
                        </Button>
                    </Box>
                </>
            }
        >
            <Typography variant="h6" gutterBottom>
                Erzähl uns etwas über dich
            </Typography>
            <Box pb={1}>
                <TextField variant="outlined" fullWidth id="contact" label="Name und Nachname" />
            </Box>
            <Box pb={1}>
                <FormControl fullWidth>
                    <InputLabel id="support-label">Unterstützung als ...</InputLabel>
                    <Select labelId="support-label" id="support" value={support} onChange={handleChange}>
                        <MenuItem value={"Ärzte"}>Ärzte</MenuItem>
                        <MenuItem value={"Pflegende"}>Pflegende</MenuItem>
                        <MenuItem value={"Facility Manager"}>Facility Manager</MenuItem>
                        <MenuItem value={"Administration / Resources"}>Administration / Resources</MenuItem>
                    </Select>
                </FormControl>
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

PrivateInformations.propTypes = {
    onNext: PropTypes.func
};

PrivateInformations.defaultProps = {};

export default PrivateInformations;
