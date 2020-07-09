import React from 'react';
import {TextField, Button, Grid, IconButton} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    searchBtn: {
        height: '100%'
    },
    bar: {
        width: '100%'
    }
}))

export default React.memo(function ({handleSearch, query,setQuery}) {
    const classes = useStyles();

    const handleChange = (e) => setQuery(e.target.value); 
    
    return (
        <form onSubmit={handleSearch}>
        <Grid container spacing={1} style={{padding: '0'}}>
            <Grid item >
                <TextField  label="Search news by topic" variant="outlined" size="small"
                value={query} onChange={handleChange} color="primary"
                />
            </Grid>
            <Grid item>
                <Button variant="contained" className={classes.searchBtn}
                color="primary"
                type="submit"
                >
                    <SearchIcon/>
                </Button>

            </Grid>
        </Grid>
        </form>
    )
})