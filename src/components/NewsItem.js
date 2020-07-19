import React from 'react';

import {Paper, Link, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core'
import { blue, red } from '@material-ui/core/colors'


export default React.memo(({headline, link, source, darkMode}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            padding: theme.spacing(2),
            height: '100%',
            borderLeft: `2px solid ${darkMode? blue[300]: blue[500]}`
        },
        grid: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
        },
        source: {
            marginTop: '.4rem'
        }
    }))

    const classes = useStyles();
    
    return (
        <Paper className={classes.root} elevation={2}>
            <div className={classes.grid}>
                <Link variant="body2" color="textPrimary" href={link} target="_blank">
                    {headline}
                </Link>
                <Typography variant="caption" color="textSecondary" className={classes.source}>
                    {source}
                </Typography>
            </div>
        </Paper>
    )
})