import React from 'react';

// Material-UI imports
import {AppBar, Toolbar, IconButton, Typography, Switch, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness3Icon from '@material-ui/icons/Brightness3';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        display: 'block',
    },
    themeSwitch: {
        width: 'auto',
        marginLeft: 'auto'
    }
}));

export default React.memo(function TopBar({setDrawerOpen, darkMode, toggleDarkMode}){

    const classes = useStyles();
    
    return(

    <AppBar position="static">
        <Toolbar>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick = {() => setDrawerOpen(true)}
            >
                <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h5" noWrap>
                Newsflick
            </Typography>

            <div className={classes.themeSwitch}>
                <IconButton onClick={() => toggleDarkMode(mode => !mode)}>
                    {
                            darkMode ? <Brightness7Icon color="secondary" /> : <Brightness3Icon color="secondary"/>
                    }
                    
                </IconButton>
            </div>
            
            
        </Toolbar>
    </AppBar>  
    );
})