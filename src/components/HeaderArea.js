import React, {useContext, useState} from 'react';
import SearchBar from './SearchBar';
import {GlobalContext} from '../context/GlobalContext';
import {Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0)
    }
}))
export default function(){

    const classes = useStyles();
    const {QueryContext, fetchNewsWithQuery} = useContext(GlobalContext);
    const [query, setQuery] = QueryContext;
    
    const [heading, setHeading] = useState('');

    const handleSearch = () => {
        console.log(query)
        fetchNewsWithQuery();
        setHeading(query);
        setQuery('');
    }       
    return (
        <Grid className={classes.root} container direction="column" spacing={1}>
            <Grid item xs={12}>
                <Typography variant="h6">{
                    heading===''?'General News': `News on "${heading}"`
                }
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <SearchBar 
                    handleSearch={handleSearch}
                    query={query}
                    setQuery={setQuery}   
                />
            </Grid>
        </Grid>

    )
}