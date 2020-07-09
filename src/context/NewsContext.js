import React, {createContext, useState, useEffect, useContext} from 'react';
import {LoadingContext} from './LoadingContext';
import axios from 'axios';
import _ from 'lodash';



export const NewsContext = createContext();

export const NewsProvider = ({children}) => {

    const [news, setNews] = useState([])
    const [loading, setLoading] = useContext(LoadingContext);

    const fetchNews = _.debounce(async (q = null) => {
        const URL = `https://news-aggregator-2.herokuapp.com/news${q ? `?query=${q}` : ``}`
        setLoading(true)
        axios.get(URL)
        .then(res => {
            setNews(_.shuffle(res.data));
            setLoading(false);
        })
    }, 500)
    
    useEffect(() => {
        fetchNews();
    }, [])

    return (
        <NewsContext.Provider value={[news, fetchNews]}>
            {children}
        </NewsContext.Provider>
    )
}