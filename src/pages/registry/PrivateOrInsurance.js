import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const PrivateOrInsurance = ({ onNext = () => {} }) => {
    return (
        <>
            <Box p={1} bgcolor="background.paper">
                <Typography variant="h6" gutterBottom>
                    Bist du eine Privatperson oder möchtest du ein Krankenhaus anmelden?
                </Typography>
            </Box>

            <Box p={1} bgcolor="background.paper">
                <Button color="default" variant="contained" fullWidth={true}>
                    Private Person
                </Button>
            </Box>
            <Box p={1} pt={0} bgcolor="background.paper">
                <Button color="default" variant="contained" fullWidth={true} onClick={onNext}>
                    Krankenhaus
                </Button>
            </Box>
        </>
    );
};

PrivateOrInsurance.propTypes = {
    onNext: PropTypes.func
};

export default PrivateOrInsurance;
