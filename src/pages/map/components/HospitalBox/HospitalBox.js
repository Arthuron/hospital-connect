import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import { Box, Typography } from "@material-ui/core";
import styles from "./HospitalBox.module.css";
import className from "classnames";
const mapStatusToColor = status => ["green", "orange", "red"][status];
const HospitalBox = ({ hilfsmittel, title, description, tel }) => {
    return (
        <Box className={styles.box}>
            <div className={styles.content}>
                <Typography>{title}</Typography>
                <Typography variant="caption">{description}</Typography>
            </div>
            <a className={styles.tel} href={`tel:${tel}`}>
                <PhoneIcon />
            </a>

            <div className={styles.hilfsmittel}>
                <Typography>Hilfsmittel: </Typography>
                {hilfsmittel.map(({ name, status }) => (
                    <div key={name} className={styles.indicatorWrapper}>
                        <span
                            className={className(styles.indicator, {
                                [styles[mapStatusToColor(status)]]: true
                            })}
                        />
                        <Typography variant="caption">{name}</Typography>
                    </div>
                ))}
            </div>
        </Box>
    );
};

HospitalBox.propTypes = {};

HospitalBox.defaultProps = {};

export default HospitalBox;
