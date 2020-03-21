import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Registry from "../../pages/registry/Registry";

const RegistryContainer = ({}) => {
    const { hospitals } = useSelector(state => state);

    return <Registry hospitals={hospitals} />;
};

RegistryContainer.propTypes = {};

RegistryContainer.defaultProps = {};

export default RegistryContainer;
