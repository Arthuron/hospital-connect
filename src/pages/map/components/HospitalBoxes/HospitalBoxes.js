import React from "react";

import HospitalBox from "../HospitalBox/HospitalBox";

const HospitalBoxes = ({ hospitals }) => {
    return hospitals.map(({ hilfsmittel, name, adress, tel }) => (
        <HospitalBox hilfsmittel={hilfsmittel} title={name} description={adress.street} tel={tel} />
    ));
};

HospitalBoxes.propTypes = {};

HospitalBoxes.defaultProps = {};

export default HospitalBoxes;
