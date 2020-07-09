import React from 'react';

// Material-UI imports
import {AppBar, Toolbar, IconButton, Typography, Switch, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

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
            <Typography className={classes.title} variant="h6" noWrap>
                Newsflick
            </Typography>
        
            <Grid container alignItems="center" className={classes.themeSwitch}>
                <Grid item>
                    <Typography variant="caption">
                        Light
                    </Typography>
                </Grid>
                <Grid item>
                    <Switch size="small" checked={darkMode} onChange={() => toggleDarkMode(mode => !mode) }/>
                </Grid>
                <Grid item>
                    <Typography variant="caption">
                        Dark
                    </Typography>
                </Grid>

           </Grid>
            
        </Toolbar>
    </AppBar>  
    );
})