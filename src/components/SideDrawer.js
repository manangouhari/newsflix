import React from 'react';
import {Drawer, Divider, Typography, Link} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

import RecentSearches from './RecentSearches';

const useStlyes = makeStyles(theme => ({
    root: {
        width: 200,
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

export default React.memo(({open, setOpen}) => {
    const classes = useStlyes();
    
    return(
        <Drawer open={open} onClose={() => setOpen(false)} >
            <div className={classes.root}>
                <RecentSearches setDrawerOpen={setOpen}/>
                {/* <div className={classes.footer}>
                    <Divider/>
                    <div className={classes.footerContainer}>
                        <Typography variant="subtitle2">
                            Made by Tejas and Manan.    
                            Want to contribute? <br/>
                            <Link>
                                Frontend - ReactJS
                            </Link><br/>
                            <Link>
                                Backend - FastAPI
                            </Link>
                        </Typography> 
                    </div>
                </div> */}
            </div>
        </Drawer>
    )
})