import React from 'react';

import {Paper, Link, Grid, Typography} from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root:{
        padding: theme.spacing(2),
        height: '100%'
    },
    grid: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        height: '100%'
    },
    source: {
        marginTop: '.8rem'
    }
}))

export default ({headline, link, source}) => {
    const classes = useStyles();
    
    
    return (
        <Paper className={classes.root} elevation={2}>
            <div className={classes.grid}>
                <Link variant="body1" color="textPrimary" href={link} target="_blank">
                    {headline}
                </Link>
                <Typography variant="body2" color="textSecondary" className={classes.source}>
                    {source}
                </Typography>
            </div>
        </Paper>
    )
}