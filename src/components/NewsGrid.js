import React, {useState, useContext} from 'react';
import NewsItem from './NewsItem';
import {GlobalContext} from '../context/GlobalContext'
import {Grid, Fade, CircularProgress} from '@material-ui/core'

export default () => {
    const { NewsContext, LoadingContext } = useContext(GlobalContext)
    const [news, setNews] = NewsContext;
    const [loading, setLoading] = LoadingContext;

    return(
        
        <Grid container spacing={3} direction="column">
        {loading && 
        (<Grid item style={{margin: 'auto'}}>
            <CircularProgress/>
        </Grid>)
        }
        {!loading && news.map(
            newsItem => (
                <Grid item>
                    <NewsItem key={newsItem.link} {...newsItem}/>
                </Grid>
            )
        )}
        
        
        </Grid>
        
         
        
    )
}