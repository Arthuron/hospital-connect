import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import LayoutWrapper from "../../components/layoutWrapper/LayoutWrapper";
import DialogBoxForButton from "../../components/dialogBoxForButton/DialogBoxForButton";

const ChooseKindOfRequest = ({ name, need, onBack }) => {
    return (
        <LayoutWrapper
            headline="Bitte wähle aus"
            onBack={{ linkTo: "/registry" }}
            footer={
                <>
                    <Box p={1} bgcolor="background.paper">
                        <Button variant="contained" color="primary" fullWidth={true} onClick={need}>
                            Engpass melden
                        </Button>
                    </Box>
                    <Box p={1} pt={0} bgcolor="background.paper">
                        <DialogBoxForButton
                            buttonProps={{
                                variant: "contained",
                                color: "primary",
                                fullWidth: true
                            }}
                            buttonLabel="Unterstützung anbieten"
                        />
                    </Box>
                </>
            }
        >
            <Box p={1} bgcolor="background.paper">
                {/*<Typography variant="h6" gutterBottom>*/}
                {/*    Welcome {name}*/}
                {/*</Typography>*/}
                <Typography variant="h5" align={"center"} display="block" gutterBottom>
                    Möchtest du einen Engpass melden oder Unterstützung anbieten ?
                </Typography>
            </Box>
        </LayoutWrapper>
    );
};

ChooseKindOfRequest.propTypes = {
    name: PropTypes.string
};

ChooseKindOfRequest.defaultProps = { name: "Krankenhaus" };

export default ChooseKindOfRequest;
