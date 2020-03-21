import React from "react";
import {Grid, Button, ButtonBase, Container, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>({
    root: {
        width: 200
    },
    helpButton: {
        position: 'relative',
        height: 200,
        width: 200,
        borderRadius: '100%',
        boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        background: theme.palette.primary.main,
        color: 'white',
        marginBottom: 40
    }
}));

export default function Start() {
    const classes = useStyles();
    return (
        <Container maxWidth="xs">
            <Grid container direction="column" justify="flex-end" alignItems="center" spacing={2}>
                <Grid item xs={12}>
                    <ButtonBase focusRipple className={classes.helpButton}>
                        <Typography>
                            Bedarf melden
                        </Typography>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" size="large" color="primary" className={classes.root}>
                        Anmelden
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" size="large" color="primary" className={classes.root}>
                        Registrieren
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}
