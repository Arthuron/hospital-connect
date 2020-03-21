import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Map from "../../pages/map/Map";

const MapContainer = ({}) => {
    const { hospitals } = useSelector(state => state);

    return <Map hospitals={hospitals} />;
};

MapContainer.propTypes = {};

MapContainer.defaultProps = {};

export default MapContainer;
