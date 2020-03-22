import React from "react";
import PropTypes from "prop-types";
import { FilterContext } from "./context";

import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import styles from "./Filter.module.css";

const FilterOptions = ({}) => {
    const { filterOptions, handleChange } = React.useContext(FilterContext);

    return (
        <div className={styles.filter}>
            <div className={styles.filterContent}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Filter Options</FormLabel>
                    <FormGroup row>
                        {Object.entries(filterOptions).map(([key, value]) => (
                            <FormControlLabel
                                key={key}
                                control={<Checkbox checked={value} onChange={handleChange} name={key} />}
                                label={key}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
            </div>
        </div>
    );
};

FilterOptions.propTypes = {};

FilterOptions.defaultProps = {};

export default FilterOptions;
