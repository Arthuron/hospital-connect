import React from "react";
import Container from '@material-ui/core/Container';
import ChooseKindOfRequest from "./ChooseKindOfRequest";

const Recordstock = ({name}) => {
    return (
        <Container fixed>
            <ChooseKindOfRequest name={name}/>
        </Container>
    );
};

Recordstock.propTypes = {};

Recordstock.defaultProps = {};

export default Recordstock;
