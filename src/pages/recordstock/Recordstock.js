import React from "react";
import Container from "@material-ui/core/Container";
import ChooseKindOfRequest from "./ChooseKindOfRequest";
import AskForWhichNeed from "./AskForWhichNeed";
import Editstock from "../editstock/Editstock";
import LayoutWrapper from "../../components/layoutWrapper/LayoutWrapper";

const Recordstock = ({ hospitals }) => {
    // clickFlowStatus:
    // 0 = init
    // 1 = HR request
    // 2 = item request
    // 3 = item list
    const [clickFlowStatus, setclickFlowStatus] = React.useState(0);

    // fake ID - muss spaeter durch einen login bekannt sein.
    const userID = "42";
    const hospital = hospitals[userID];

    const _incrementFlowStatus = () => {
        setclickFlowStatus(clickFlowStatus + 1);
    };
    const _decrementFlowStatus = () => {
        setclickFlowStatus(clickFlowStatus - 1);
    };

    if (clickFlowStatus === 3) {
        return <Editstock hospital={hospital} goBack={_decrementFlowStatus} />;
    }
    return (
        <>
            {clickFlowStatus === 0 && (
                <ChooseKindOfRequest name={hospital.name} need={_incrementFlowStatus} offer={""} onBack={_incrementFlowStatus}/>
            )}
            {clickFlowStatus === 1 && (
                <AskForWhichNeed name={hospital.name} needType={"medizinisches Personal"} need={""} notNeed={()=>{_incrementFlowStatus()}} onBack={()=>{_decrementFlowStatus()}}/>
            )}
            {clickFlowStatus === 2 && (
                <AskForWhichNeed
                    name={hospital.name}
                    needType={"medizinische Hilfsmittel"}
                    need={_incrementFlowStatus}
                    notNeed={""}
                    onBack={_decrementFlowStatus}
                />
            )}
        </>
    );
};

Recordstock.propTypes = {};
Recordstock.defaultProps = {};

export default Recordstock;
