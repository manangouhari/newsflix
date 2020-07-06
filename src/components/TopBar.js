import React from 'react';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
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
        /* [theme.breakpoints.up('sm')]: {
        display: 'block',
      }, */
    },
}));

export default function TopBar(){
    const classes = useStyles();

    return(
    <AppBar position="static">
        <Toolbar>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
            >
                <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
                News!
            </Typography>
        </Toolbar>
    </AppBar>
    );
}