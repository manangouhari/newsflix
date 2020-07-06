import React, {createContext, useState, useEffect, useCallback} from 'react';
import _ from 'lodash';
import axios from 'axios';

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    
    const [news, setNews] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchNews = useCallback(_.debounce((q = null) => {
        const URL = `http://127.0.0.1:8000/news${q ? `?query=${q}` : ``}`
        setNews([])
        setLoading(true)
        axios.get(URL)
            .then(resp => {
                setNews(_.shuffle(resp.data))
                setLoading(false)
            })
    }, 500), [query]);

    useEffect(fetchNews, [])

    const fetchNewsWithQuery = () => fetchNews(query)

    return(
        <GlobalContext.Provider value={{
            NewsContext: [news, setNews],
            QueryContext: [query, setQuery],
            LoadingContext: [loading, setLoading],
            fetchNewsWithQuery
        }}>
            {children}
        </GlobalContext.Provider>
    )
}