import React, { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const RecentContext = createContext();

export const RecentProvider = ({ children }) => {
    
    const [recentSearches, setRecentSearch] = useLocalStorage('searches', [])

    const addRecentSearch = (searchTerm) => {
        //Adding new search and then removing duplicates using Set data structure.
        let newSearches = [...new Set([searchTerm, ...recentSearches])]
        
        //If recentSearch list more than 5, slice it to 5.
         newSearches = (newSearches.length>5)? newSearches.slice(0,5): newSearches;
        setRecentSearch(newSearches)
    }

    const deleteRecentSearch = (searchTerm) => {
        setRecentSearch(recentSearches.filter(term => term !== searchTerm))
    }
    
    return (
        <RecentContext.Provider value={[recentSearches, addRecentSearch, deleteRecentSearch]}>
            {children}
        </RecentContext.Provider>
    )
}