import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import LayoutWrapper from "../../components/layoutWrapper/LayoutWrapper";

const PrivateOrInsurance = ({ onNext = () => {} }) => {
    const handleClick = () => {
        onNext(2);
    };
    return (
        <LayoutWrapper
            headline={"Registrieren"}
            onBack={{ linkTo: "/" }}
            footer={
                <>
                    <Box p={1} bgcolor="background.paper">
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth={true}
                            disableElevation
                            onClick={handleClick}
                        >
                            Privatperson
                        </Button>
                    </Box>
                    <Box p={1} pt={0} bgcolor="background.paper">
                        <Button variant="contained" color="primary" fullWidth={true} disableElevation onClick={onNext}>
                            Klinik
                        </Button>
                    </Box>
                </>
            }
        >
            <Box p={1} bgcolor="background.paper">
                <Typography variant="h6" align={"center"} gutterBottom>
                    Bist du eine private Person und möchtest deine Hilfe anbieten?
                </Typography>
                <Typography variant="h6" align={"center"} gutterBottom>
                    Oder möchtest du dich im Namen einer Klinik registrieren?
                </Typography>
            </Box>
        </LayoutWrapper>
    );
};

PrivateOrInsurance.propTypes = {
    onNext: PropTypes.func
};

export default PrivateOrInsurance;
