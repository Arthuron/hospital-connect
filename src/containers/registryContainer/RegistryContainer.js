import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Registry from "../../pages/registry/Registry";

const RegistryContainer = ({}) => {
    const { data } = useSelector(state => state.hospitals);

    return <Registry hospitals={data} />;
};

RegistryContainer.propTypes = {};

RegistryContainer.defaultProps = {};

export default RegistryContainer;
