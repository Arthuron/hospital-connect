import React from "react";
import Container from '@material-ui/core/Container';
import ChooseKindOfRequest from "./ChooseKindOfRequest";
import AskForWhichNeed from "./AskForWhichNeed";
import Editstock from "../editstock/Editstock";

const Recordstock = ({hospitals}) => {

    // clickFlowStatus:
    // 0 = init
    // 1 = HR request
    // 2 = item request
    // 3 = item list
    const [clickFlowStatus, setclickFlowStatus] = React.useState(0);

    // fake ID - muss spaeter durch einen login bekannt sein.
    const userID = '42';
    const hospital = hospitals[userID];



    let _incrementFlowStatus = () => {
        setclickFlowStatus(clickFlowStatus + 1);
    };
    let _decrementFlowStatus = () => {
        setclickFlowStatus(clickFlowStatus - 1);
    };

    return (
        <Container fixed>
            {clickFlowStatus === 0 &&
            <ChooseKindOfRequest
                name={hospital.name}
                need={() => _incrementFlowStatus()}
                offer={''}
            />}
            {clickFlowStatus === 1 &&
            <AskForWhichNeed
                name={hospital.name}
                needType={'Personal'}
                need={() => _decrementFlowStatus()}
                notNeed={() => _incrementFlowStatus()}
            />}
            {clickFlowStatus === 2 &&
            <AskForWhichNeed
                name={hospital.name}
                needType={'Hilfsmittel'}
                need={() => _incrementFlowStatus()}
                notNeed={() => _decrementFlowStatus()}
            />}
            {clickFlowStatus === 3 &&
            <Editstock
                hospital={hospital}
            />}
        </Container>
    );
};

Recordstock.propTypes = {};
Recordstock.defaultProps = {};

export default Recordstock;
