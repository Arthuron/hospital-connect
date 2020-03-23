import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, Divider, makeStyles, Container } from "@material-ui/core";
import { color, palette } from "@material-ui/system";
import Logo from "./logo.svg";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const LayoutWrapper = ({ children, headline, footer, onBack }) => {
    React.useEffect(() => {
        function setDocHeight() {
            document.documentElement.style.setProperty("--vh", `${window.innerHeight / 100}px`);
        }

        window.addEventListener("resize", setDocHeight);
        window.addEventListener("orientationchange", setDocHeight);
    }, []);
    const useStyles = makeStyles(theme => ({
        root: props => {
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
            maxWidth: 400,
            width: "100%",
            margin: "0 auto",
            padding: 10,
            height: 800,
            justifyContent: "space-between",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            boxShadow: "1px 1px 5px 5px rgba(0, 0, 0, .1)",
            maxHeight: "calc(var(--vh, 1vh) * 100)"
        },
        header: {
            margin: "40px auto 40px auto",
            textAlign: "center"
        },
        backButton: {
            margin: theme.spacing(1),
            position: "absolute",
            top: 30
        }
    }));
    const { header, root, wrapper, pageWrapper, backButton } = useStyles();
    let history = useHistory();

    return (
        <div className={pageWrapper}>
            <div>
                {onBack && (
                    <Button
                        startIcon={<ArrowBackIos />}
                        size="large"
                        className={backButton}
                        onClick={
                            typeof onBack.linkTo !== "undefined"
                                ? () => {
                                      history.push(onBack.linkTo);
                                  }
                                : onBack
                        }
                    ></Button>
                )}
                <div className={header}>
                    <img src={Logo} alt="d" />
                </div>
                <div className={wrapper}>
                    <Typography className={root}>{headline}</Typography>
                </div>

                {children}
            </div>
            <div>{footer}</div>
        </div>
    );
};

LayoutWrapper.propTypes = {};

LayoutWrapper.defaultProps = {};

export default LayoutWrapper;
