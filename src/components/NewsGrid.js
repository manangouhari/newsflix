import React, {useContext, useMemo} from 'react';
import NewsItem from './NewsItem';

import {NewsContext} from '../context/NewsContext';
import {LoadingContext} from '../context/LoadingContext';

import {Grid,  CircularProgress, Typography} from '@material-ui/core'

export default React.memo(({darkMode}) => {
    
    const [news] = useContext(NewsContext);
    const [loading] = useContext(LoadingContext);

    const sortedNews = useMemo(() => news.slice().sort((a, b) => new Date(b.published_at) - new Date(a.published_at)), [news]);

    return(
        
        <Grid container spacing={3} >
        {loading && 
        (<Grid item style={{margin: 'auto'}}>
            <CircularProgress/>
        </Grid>)
        }
        {(!loading && 
        sortedNews.map(
            newsItem => (
                <Grid item xs={12} sm={6} md={4} >
                    <NewsItem key={newsItem.link} {...newsItem} darkMode={darkMode}/>
                </Grid>
            )
        ))}
        </Grid>
            
        
    )
})