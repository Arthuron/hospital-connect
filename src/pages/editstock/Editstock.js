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

Editstock.defaultProps = {hospital:{
        name: "St. Joseph Krankenhaus",
        verband: "Verband 3",
        tel: "030 765765756",
        contact: {
            name: "Vorname",
            surname: "Nachname",
            tel: "030 42354463534"
        },
        adress: {
            cordinates: {
                lat: "52.478142",
                lang: "13.372949"
            },
            street: "Lützowstraße 26",
            postalcode: 13467
        },
        hilfsmittel: [
            {
                name: "Atemschutz",
                status: 2
            },
            {
                name: "Handschuhe",
                status: 2
            },
            {
                name: "Schuhe",
                status: 0
            }
        ]
    }};

export default Editstock;
