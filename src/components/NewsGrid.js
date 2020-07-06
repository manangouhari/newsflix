import React, {useState, useContext} from 'react';
import NewsItem from './NewsItem';
import {GlobalContext} from '../context/GlobalContext'
import {Grid, Fade} from '@material-ui/core'

export default () => {
    const { NewsContext } = useContext(GlobalContext)
    const [news, setNews] = NewsContext;

    return(
        <Fade in={news.length > 0}>
        <Grid container spacing={3} direction="column">
        { news.map(
            newsItem => (
                <Grid item>
                    <NewsItem key={newsItem.link} {...newsItem}/>
                </Grid>
            )
        ) }
        
        </Grid>
        </Fade>
    )
}