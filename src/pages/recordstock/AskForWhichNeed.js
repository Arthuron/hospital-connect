import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import LayoutWrapper from "../../components/layoutWrapper/LayoutWrapper";
import DialogBoxForButton from "../../components/dialogBoxForButton/DialogBoxForButton";

const AskForWhichNeed = ({ name, needType, need, notNeed, onBack }) => {
    return (
        <LayoutWrapper
            headline="Engpass melden"
            onBack={onBack}
            footer={
                <>
                    <Box p={1} bgcolor="background.paper">
                        {need ? (
                            <Button color="primary" variant="contained" fullWidth={true} onClick={need}>
                                Ja
                            </Button>
                        ) : (
                            <DialogBoxForButton
                                buttonProps={{
                                    variant: "contained",
                                    color: "primary",
                                    fullWidth: true,
                                    disableElevation: true
                                }}
                                buttonLabel="Ja"
                            />
                        )}
                    </Box>
                    <Box p={1} pt={0} bgcolor="background.paper">
                        {notNeed ? (
                            <Button color="primary" variant="contained" fullWidth={true} onClick={notNeed}>
                                Nein
                            </Button>
                        ) : (
                            <DialogBoxForButton
                                buttonProps={{
                                    variant: "contained",
                                    color: "primary",
                                    fullWidth: true,
                                    disableElevation: true
                                }}
                                buttonLabel="Nein"
                            />
                        )}
                    </Box>
                </>
            }
        >
            <Box p={1} bgcolor="background.paper">
                {/*<Typography variant="h6" gutterBottom>*/}
                {/*    {name}*/}
                {/*</Typography>*/}
                <Typography variant="h5" align={"center"} display="block" gutterBottom>
                    Benötigst du {needType} ?
                </Typography>
            </Box>
        </LayoutWrapper>
    );
};

AskForWhichNeed.propTypes = {
    name: PropTypes.string
};

AskForWhichNeed.defaultProps = { name: "Krankenhaus" };

export default AskForWhichNeed;
