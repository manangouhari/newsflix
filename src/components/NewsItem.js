import React from 'react';

import {Paper, Link, Grid, Typography} from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root:{
        padding: theme.spacing(2)
    },
    grow: {
        flexGrow:1
    },
    iconButon: {
        marginLeft: 'auto'
    }
}))

export default ({headline, link, source}) => {
    const classes = useStyles();
    
    
    return (
        <Paper className={classes.root} elevation={3}>
            <Grid container direction="column" spacing={1}>
                <Grid item className={classes.grow}>
                    <Link variant="body1" color="textPrimary" href={link} target="_blank">
                    {headline}
                    </Link>
                </Grid>
                <Grid item>
                    
                    <Typography variant="body2" color="textSecondary">
                        {source}
                    </Typography>
                    
                </Grid>
            </Grid>
        </Paper>
    )
}