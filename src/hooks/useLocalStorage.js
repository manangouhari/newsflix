import React from 'react';

export default function useLocalStorageState(key, defaultValue = '') {
    const [state, setState] = React.useState(
        () => JSON.parse(window.localStorage.getItem(key)) || defaultValue,
    )

    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}
