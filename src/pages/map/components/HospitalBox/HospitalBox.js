import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import { Box, Typography, Slider, makeStyles, Button } from "@material-ui/core";
import styles from "./HospitalBox.module.css";
import className from "classnames";
import SliderIndicator from "./SliderIndicator";

const HospitalBox = ({ hilfsmittel, title, description, tel }) => {
    return (
        <Box className={styles.box}>
            <div className={styles.content}>
                <Typography>{title}</Typography>
                <Typography variant="caption">{description}</Typography>
            </div>

            <div className={styles.hilfsmittel}>
                {hilfsmittel.map(({ name, status }) => (
                    <SliderIndicator name={name} status={status} />
                ))}
            </div>

            <Button
                className={styles.button}
                variant="contained"
                color="primary"
                fullWidth={true}
                disableElevation
                href={"tel:" + tel}
            >
                Anrufen
            </Button>
        </Box>
    );
};

HospitalBox.propTypes = {};

HospitalBox.defaultProps = {};

export default HospitalBox;

/*
               <div key={name} className={styles.indicatorWrapper}>
                        <span
                            className={className(styles.indicator, {
                                [styles[mapStatusToColor(status)]]: true
                            })}
                        />
                        <Typography variant="caption">{name}</Typography>
                    </div>
*/
