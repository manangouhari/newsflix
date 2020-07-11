import React from 'react';

import {Paper, Link, Grid, IconButton} from '@material-ui/core';
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

export default React.memo(({headline, link, source}) => {
    const classes = useStyles();
    
    
    return (
        <Paper className={classes.root} elevation={3}>
            <Grid container direction="column" spacing={1}>
                <Grid item className={classes.grow}>
                    <Link variant="body1" color="textPrimary" href={link} >
                    {headline}
                    </Link>
                </Grid>
                <Grid item>
                    
                    <Link variant="body2" color="textSecondary">
                        Source: {source}
                    </Link>
                    
                </Grid>
            </Grid>
        </Paper>
    )
})