import React from "react";
import PropTypes from "prop-types";
import HospitalBoxes from "../HospitalBoxes/HospitalBoxes";
import { FilterContext } from "./context";

const FilterResults = () => {
    const { filterResults } = React.useContext(FilterContext);
    return <HospitalBoxes hospitals={filterResults} />;
};

FilterResults.propTypes = {};

FilterResults.defaultProps = {};

export default FilterResults;
