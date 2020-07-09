import React, {useState, createContext} from 'react';

export const HeadingContext = createContext();

export const HeadingProvider = ({children}) => {
    const [heading, setHeading] = useState('');

    return(
        <HeadingContext.Provider value={[heading, setHeading]}>
            {children}
        </HeadingContext.Provider>
    )
}