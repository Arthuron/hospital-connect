import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import Logo from "./logo.svg";
import { useHistory } from "react-router-dom";

const Splash = ({}) => {
    let history = useHistory();

    React.useEffect(() => {
        setTimeout(() => {
            history.push("/login");
        }, 2000);
    }, [history]);

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
            maxHeight: "100vh",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            background: theme.palette.primary.main
        },
        img: {
            width: "100%",
            maxWidth: 300
        }
    }));
    const { img, pageWrapper } = useStyles();

    return (
        <div className={pageWrapper}>
            <img className={img} src={Logo} alt="" />
        </div>
    );
};

Splash.propTypes = {};

Splash.defaultProps = {};

export default Splash;
