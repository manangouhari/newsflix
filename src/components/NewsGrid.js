import React, {useState, useContext} from 'react';
import NewsItem from './NewsItem';

import {NewsContext} from '../context/NewsContext';
import {LoadingContext} from '../context/LoadingContext';

import {Grid,  CircularProgress, Typography} from '@material-ui/core'

export default () => {
    
    const [news] = useContext(NewsContext);
    const [loading] = useContext(LoadingContext);
    return(
        
        <Grid container spacing={3} >
        {loading && 
        (<Grid item style={{margin: 'auto'}}>
            <CircularProgress/>
        </Grid>)
        }
        {(!loading && 
        news.map(
            newsItem => (
                <Grid item xs={12} >
                    <NewsItem key={newsItem.link} {...newsItem}/>
                </Grid>
            )
        ))}
        </Grid>
            
        
    )
}