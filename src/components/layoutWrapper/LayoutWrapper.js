import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, Divider, makeStyles, Container } from "@material-ui/core";
import { color, palette } from "@material-ui/system";
import Logo from "./logo.svg";
const LayoutWrapper = ({ children, headline }) => {
    const useStyles = makeStyles(theme => ({
        root: props => {
            console.log(theme.palette);
            return {
                borderBottom: "1px solid",
                borderBottomColor: theme.palette.primary.main,
                display: "inline",
                padding: "2px 20px"
            };
        },
        wrapper: props => {
            return {
                textAlign: "center",
                margin: "20px auto"
            };
        },
        pageWrapper: {
            width: 500,
            margin: "0 auto"
        },
        header: {
            margin: "40px auto 40px auto",
            textAlign: "center"
        }
    }));

    const { header, root, wrapper, pageWrapper } = useStyles();
    return (
        <div className={pageWrapper}>
            <div className={header}>
                <img src={Logo} alt="d" />
            </div>
            <div className={wrapper}>
                <Typography className={root}>{headline}</Typography>
            </div>

            {children}
        </div>
    );
};

LayoutWrapper.propTypes = {};

LayoutWrapper.defaultProps = {};

export default LayoutWrapper;
