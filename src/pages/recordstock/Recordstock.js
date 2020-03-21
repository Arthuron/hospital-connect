import React from "react";
import Container from '@material-ui/core/Container';
import ChooseKindOfRequest from "./ChooseKindOfRequest";

const Recordstock = ({hospitals}) => {

    // fake ID - muss spaeter durch einen login bekannt sein.
    const userID = '42';
    const hospital = hospitals[userID];
    console.log(hospital);

    return (
        <Container fixed>
            <ChooseKindOfRequest name={hospital.name}/>
        </Container>
    );
};

Recordstock.propTypes = {};

Recordstock.defaultProps = {};

export default Recordstock;
