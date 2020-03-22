import React from "react";
import Container from "@material-ui/core/Container";
import PrivateOrInsurance from "./PrivateOrInsurance";
import InsuranceInformations from "./InsuranceInformations";
import PrivateInformations from "./PrivateInformations";

const Registry = ({ hospitals }) => {
    const [clickFlowStatus, setclickFlowStatus] = React.useState(0);

    const userID = "42";
    const hospital = hospitals[userID];

    const _incrementFlowStatus = (index = 1) => {
        setclickFlowStatus(clickFlowStatus + (typeof index !== "number") ? 1 : index);
    };
    const _decrementFlowStatus = (index = 1) => {
        setclickFlowStatus(clickFlowStatus - (typeof index !== "number") ? 1 : index);
    };

    return (
        <>
            {clickFlowStatus === 0 && <PrivateOrInsurance onNext={_incrementFlowStatus}/>}
            {clickFlowStatus === 1 && <InsuranceInformations onNext={() => {}} onBack={_decrementFlowStatus}/>}
            {clickFlowStatus === 2 && <PrivateInformations onNext={() => {}} onBack={() => {}} />}
        </>
    );
};

Registry.propTypes = {};
Registry.defaultProps = {};

export default Registry;
