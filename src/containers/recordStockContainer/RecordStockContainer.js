import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Recordstock from "../../pages/recordstock/Recordstock";

const RecordStockContainer = ({}) => {
    const { data } = useSelector(state => state.hospitals);

    return <Recordstock hospitals={data} />;
};

RecordStockContainer.propTypes = {};

RecordStockContainer.defaultProps = {};

export default RecordStockContainer;
