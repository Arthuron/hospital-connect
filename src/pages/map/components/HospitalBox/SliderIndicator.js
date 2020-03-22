import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Slider, Typography } from "@material-ui/core";
import styles from "./HospitalBox.module.css";

const ind = {
    need: 1,
    ok: 2,
    offer: 3
};
const SliderIndicator = ({ status, name }) => {
    const classes = {
        thumb: "MuiSlider-thumb" + status
    };

    return (
        <div className={styles[status]}>
            <Typography className={styles.label} variant="caption">
                {name}
            </Typography>
            <Slider
                disabled
                defaultValue={ind[status]}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                className={classes}
                min={0}
                max={4}
            />
        </div>
    );
};

SliderIndicator.propTypes = {};

SliderIndicator.defaultProps = {};

export default SliderIndicator;
