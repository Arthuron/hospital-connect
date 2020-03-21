import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, FormControl, Input, TextField, InputLabel, Card, CardActions, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    }
});

export default function Login() {
    const classes = useStyles();
    return (
        <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
            <Typography variant="h2" gutterBottom>
                Lizard
            </Typography>
            <Card className={classes.root}>
                <CardContent>
                    <Typography paragraph>
                        This impressive paella is a perfect
                    </Typography>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="username" label="Username" />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                    </form>
                </CardContent>
            </Card>
        </Grid>
    );
}
