import React from "react";
import PropTypes from 'prop-types';
import {Button} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const AskForWhichNeed = ({name,needType,need,notNeed}) => {
    return (
        <Container fixed>
            <Box p={1} bgcolor="background.paper">
                <Typography variant="h6" gutterBottom>
                   {name}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    Benötigst du {needType} ?
                </Typography>
            </Box>
            <Box p={0} pb={1} pt={1} bgcolor="background.paper">
                <Divider variant="middle"/>
            </Box>
            <Box p={1} bgcolor="background.paper">
                <Button color="primary" variant="contained" fullWidth={true} onClick={need}>Ja</Button>
            </Box>
            <Box p={1} pt={0} bgcolor="background.paper">
                <Button color="secondary" variant="contained" fullWidth={true} onClick={notNeed}>Nein</Button>
            </Box>
        </Container>
    );
};

AskForWhichNeed.propTypes = {
    name: PropTypes.string
};

AskForWhichNeed.defaultProps = {name:"Krankenhaus"};

export default AskForWhichNeed;
