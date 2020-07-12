import React from 'react';
import {Drawer, Divider, Typography, Link} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

import RecentSearches from './RecentSearches';

const useStlyes = makeStyles(theme => ({
    root: {
        width: 240,
    }, 
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    footerContainer: {
        padding: theme.spacing(2,1)
    }
}))

export default ({open, setOpen}) => {
    const classes = useStlyes();
    
    return(
        <Drawer open={open} onClose={() => setOpen(false)} >
            <div className={classes.root}>
                <RecentSearches setDrawerOpen={setOpen}/>
                <div className={classes.footer}>
                    <Divider/>
                    <div className={classes.footerContainer}>
                        <Typography variant="subtitle2">
                            Made by <Link href="https://github.com/tejasa97" target="_blank">Tejas</Link> and <Link href="https://github.com/manan2002" target="_blank">Manan</Link>.
                        </Typography> 
                    </div>
                </div> 
            </div>
        </Drawer>
    )
}