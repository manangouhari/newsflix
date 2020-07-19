import React, {useContext, useState, useCallback, useMemo} from 'react';
import SearchBar from './SearchBar';
import {NewsContext} from '../context/NewsContext';
import { HeadingContext } from '../context/HeadingContext';
import { RecentContext } from '../context/RecentContext';

import {Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0),
        padding: 0
    }
}))

export default () => {
    
    
    const [query, setQuery] = useState('');
    const [news, fetchNews] = useContext(NewsContext);   
    const [heading, setHeading] = useContext(HeadingContext);   
    const [recentSearches, addSearch] = useContext(RecentContext);   
    const handleSearch = useCallback((e) => {
        console.log(e); 
        e.preventDefault();
        if (query==='') return;
        fetchNews(query);
        addSearch(query)
        setHeading(query);
        setQuery('');
    }, [query]);       
    
    

    const classes = useStyles();
    return (
        <Grid className={classes.root} container direction="row" justify="space-between" spacing={2}>
            <Grid item >
                
                <Typography variant="h5">{
                    heading===''?'General News': `News on "${heading}"`
                }
                </Typography>
                

            </Grid>
            <Grid item>
                <SearchBar 
                    handleSearch={handleSearch}
                    query={query}
                    setQuery={setQuery}   
                />
            </Grid>
        </Grid>

    )
}