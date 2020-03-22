import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import LayoutWrapper from "../../components/layoutWrapper/LayoutWrapper";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.background.paper
    }
}));

const GreenRadio = withStyles({
    root: {
        color: green[400],
        "&$checked": {
            color: green[600]
        }
    },
    checked: {}
})(props => <Radio color="default" {...props} />);

const MyListItem = (name, status, index) => {
    const [selectedValue, setSelectedValue] = React.useState(status + index);

    const handleChange = event => {
        setSelectedValue(event.target.value);
    };
    return (
        <ListItem key={index}>
            <ListItemText primary={name} />
            <Radio
                checked={selectedValue === "need" + index}
                onChange={handleChange}
                value={"need" + index}
                name="radio-button-demo"
                inputProps={{ "aria-label": "Need" }}
            />

            <Radio
                checked={selectedValue === "ok" + index}
                onChange={handleChange}
                value={"ok" + index}
                color="default"
                name="radio-button-demo"
                inputProps={{ "aria-label": "Ok" }}
            />

            <GreenRadio
                checked={selectedValue === "offer" + index}
                onChange={handleChange}
                value={"offer" + index}
                name="radio-button-demo"
                inputProps={{ "aria-label": "Offer" }}
            />
        </ListItem>
    );
};

const Editstock = ({ hospital, goBack }) => {
    const classes = useStyles();

    let listItems = () => {
        const listItems = hospital.hilfsmittel.map((item, index) => MyListItem(item.name, item.status, index));
        return (
            <div className={classes.root}>
                {listItems}

                <Box p={0} pb={1} pt={1} bgcolor="background.paper">
                    <Divider variant="middle" />
                </Box>
                <Box p={1} bgcolor="background.paper">
                    <Link to="/map">
                        <Button color="primary" variant="contained" fullWidth={true}>
                            Suchen
                        </Button>
                    </Link>
                </Box>
                <Box p={1} pt={0} bgcolor="background.paper">
                    <Button color="default" variant="contained" fullWidth={true} onClick={goBack}>
                        Zurück
                    </Button>
                </Box>
            </div>
        );
    };

    return (
        <LayoutWrapper headline="Hilfsgüter">
            <Box p={1} bgcolor="background.paper">
                <Typography variant="h6" gutterBottom>
                    Welche medizinischen Hilfsgüter benötigst du?
                </Typography>
            </Box>

            <Box p={1} bgcolor="background.paper">
                {listItems}
            </Box>
        </LayoutWrapper>
    );
};
Editstock.propTypes = {
    hospital: PropTypes.object
};

Editstock.defaultProps = {
    hospital: {
        name: "St. Joseph Krankenhaus",
        verband: "Verband 3",
        tel: "030 765765756",
        contact: {
            name: "Vorname",
            surname: "Nachname",
            tel: "030 42354463534"
        },
        adress: {
            cordinates: {
                lat: "52.478142",
                lang: "13.372949"
            },
            street: "Lützowstraße 26",
            postalcode: 13467
        },
        hilfsmittel: [
            {
                name: "Atemschutz",
                status: "offer"
            },
            {
                name: "Handschuhe",
                status: "ok"
            },
            {
                name: "Schuhe",
                status: "need"
            },
            {
                name: "Atemschutz",
                status: "offer"
            },
            {
                name: "Handschuhe",
                status: "ok"
            },
            {
                name: "Schuhe",
                status: "need"
            },
            {
                name: "Atemschutz",
                status: "offer"
            },
            {
                name: "Handschuhe",
                status: "ok"
            },
            {
                name: "Schuhe",
                status: "need"
            },
            {
                name: "Atemschutz",
                status: "offer"
            },
            {
                name: "Handschuhe",
                status: "ok"
            },
            {
                name: "Schuhe",
                status: "need"
            }
        ]
    }
};

export default Editstock;
