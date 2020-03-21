import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Recordstock from "../../pages/recordstock/Recordstock";

const RecordStockContainer = ({}) => {
    const { hospitals } = useSelector(state => state);

    return <Recordstock hospitals={hospitals} />;
};

RecordStockContainer.propTypes = {};

RecordStockContainer.defaultProps = {};

export default RecordStockContainer;
