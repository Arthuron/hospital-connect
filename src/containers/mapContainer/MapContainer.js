import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Map from "../../pages/map/Map";

const MapContainer = ({}) => {
    const { data } = useSelector(state => state.hospitals);

    return <Map hospitals={Object.values(data)} />;
};

MapContainer.propTypes = {};

MapContainer.defaultProps = {};

export default MapContainer;
