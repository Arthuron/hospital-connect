import React from "react";
import { FilterContext } from "./context";

const Filter = ({ children, hospitals }) => {
    const verbaende = [...new Set(hospitals.map(({ verband }) => verband))];

    const [filterOptions, setFilterOptions] = React.useState(
        verbaende.reduce(
            (allVerbaende, verband) => ({
                ...allVerbaende,
                [verband]: true
            }),
            {}
        )
    );

    const checkedFilterOptions = Object.entries(filterOptions).reduce(
        (all, [key, value]) => (value ? [...all, key] : all),
        []
    );

    const filterResults = hospitals.filter(({ verband }) => checkedFilterOptions.includes(verband));

    const handleChange = event => {
        setFilterOptions({ ...filterOptions, [event.target.name]: event.target.checked });
    };

    return (
        <FilterContext.Provider value={{ filterResults, filterOptions, handleChange }}>
            {children}
        </FilterContext.Provider>
    );
};

Filter.propTypes = {};

Filter.defaultProps = {};

export default Filter;
