import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from "@material-ui/core";
const DialogBoxForButton = ({ buttonProps, buttonLabel }) => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button {...buttonProps} onClick={handleClick}>
                {buttonLabel}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Nicht implementiert im Prototypen</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Diese Funktion ist noch nicht implementiert. Bitte auf Registrieren klicken.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Schließen
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

DialogBoxForButton.propTypes = {};

DialogBoxForButton.defaultProps = {};

export default DialogBoxForButton;
