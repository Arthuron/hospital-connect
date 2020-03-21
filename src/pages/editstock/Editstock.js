import React from "react";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Editstock = ({hospital}) => {

    return (
        <Container fixed>
            <Box p={1} bgcolor="background.paper">
                <Typography variant="h6" gutterBottom>
                    StockList
                </Typography>
            </Box>
        </Container>
    );
};
Editstock.propTypes = {
    hospital: PropTypes.object
};

Editstock.defaultProps = {hospital:{}};

export default Editstock;
