import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext';
import {Paper, Typography, Link, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root:{
        padding: theme.spacing(2)
    }
}))

export default ({headline, link, source}) => {
    const classes = useStyles();
    
    
    return (
        <Paper className={classes.root} elevation={1}>
            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <Link variant="subtitle1" color="inherit" href={link}>
                    {headline}
                    </Link>
                </Grid>
                <Grid item>
                    <Link variant="subtitle2">
                        Source: {source}
                    </Link>
                </Grid>
            </Grid>
        </Paper>
    )
}