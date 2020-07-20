import React, {useMemo} from 'react';

import {Paper, Link, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core'
import { blue, red } from '@material-ui/core/colors'


export default React.memo(({headline, link, source, published_at,darkMode}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            padding: (theme.spacing(2) - 6), //10px (16px - 6px)
            height: '100%',
            borderLeft: `2px solid ${darkMode? blue[300]: blue[500]}`
        },
        grid: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
        },
        meta: {
            marginTop: '.4rem'
        }
    }))

    const date = useMemo(() => {
        const d = new Date(published_at)
        return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
    }, [published_at])

    const classes = useStyles();

    
    
    return (
        <Paper className={classes.root} elevation={2}>
            <div className={classes.grid}>
                <Link variant="body2" color="textPrimary" href={link} target="_blank">
                    {headline}
                </Link>
                <div style={{display: 'flex', justifyContent: 'space-between'}} className={classes.meta}>
                    <Typography variant="caption" color="textSecondary" >
                        {source}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" >
                        {date}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
})