import React from "react";
import Container from "@material-ui/core/Container";

import PrivateOrInsurance from "./PrivateOrInsurance";
import InsuranceInformations from "./InsuranceInformations";

const Registry = ({ hospitals }) => {
    const [clickFlowStatus, setclickFlowStatus] = React.useState(0);

    const userID = "42";
    const hospital = hospitals[userID];

    const _incrementFlowStatus = () => {
        setclickFlowStatus(clickFlowStatus + 1);
    };
    const _decrementFlowStatus = () => {
        setclickFlowStatus(clickFlowStatus - 1);
    };

    return (
        <Container fixed>
            {clickFlowStatus === 0 && <PrivateOrInsurance onNext={_incrementFlowStatus} />}
            {clickFlowStatus === 1 && <InsuranceInformations onNext={() => {}} />}
        </Container>
    );
};

Registry.propTypes = {};
Registry.defaultProps = {};

export default Registry;
