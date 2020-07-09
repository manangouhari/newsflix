import React, {useContext, useState, useCallback} from 'react';
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

export default React.memo(function(){
    
    
    const [query, setQuery] = useState('');
    const [news, fetchNews] = useContext(NewsContext);   
    const [heading, setHeading] = useContext(HeadingContext);   
    const [recentSearches, addSearch] = useContext(RecentContext);   
    const handleSearch = useCallback(() => {
        if (query==='') return;
        fetchNews(query);
        addSearch(query)
        setHeading(query);
        setQuery('');
    }, [query]);       
    
    const classes = useStyles();
    return (
        <Grid className={classes.root} container direction="column" spacing={2}>
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
});