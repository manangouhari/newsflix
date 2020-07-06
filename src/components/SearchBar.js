import React from 'react';
import {TextField, Button, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    searchBtn: {
        height: '100%'
    }
}))

export default function ({handleSearch, query,setQuery}) {
    const classes = useStyles();

    const handleChange = (e) => setQuery(e.target.value); 
    return (
        <Grid container spacing={1}>
            <Grid item>
                <TextField  label="Search news by topic" variant="outlined" size="small"
                value={query} onChange={handleChange}
                />
            </Grid>
            <Grid item>
                <Button variant="outlined" className={classes.searchBtn}
                onClick={handleSearch}
                color="primary"
                >Search</Button>
            </Grid>
        </Grid>
        
    )
}