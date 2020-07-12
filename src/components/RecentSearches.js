import React, {useState, useContext} from 'react';

// Material-UI imports
import {List, ListItem, ListItemText, ListItemSecondaryAction,Typography, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
// Context imports
import {NewsContext} from '../context/NewsContext';
import { HeadingContext } from '../context/HeadingContext';
import { RecentContext } from '../context/RecentContext';


const useStyles = makeStyles((theme) => ({
    listItem: {
        backgroundColor: theme.palette.secondary
    },
    heading: {
        padding: theme.spacing(2,1),
        paddingBottom: theme.spacing(0)
    },
    message: {
        padding: theme.spacing(1),
    }
}));

export default ({setDrawerOpen}) => {
    const [searches, addSearch, deleteSearch] = useContext(RecentContext);
    const [news, fetchNews] = useContext(NewsContext);
    const [heading, setHeading] = useContext(HeadingContext);
    const classes = useStyles();
    
    return(
        <>
        <Typography variant="h6" className={classes.heading}>
            Recent searches
        </Typography>
        {searches.length > 0?
        (<List>
            {
                searches.map(searchTerm => (
                    <ListItem key={searchTerm} button className={classes.listItem} onClick={() => { 
                        fetchNews(searchTerm)
                        setHeading(searchTerm)
                        setDrawerOpen(false)
                    }}>
                        <ListItemText primary={searchTerm} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => {deleteSearch(searchTerm)}}>
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>

                ))
            }
        </List>):
            <Typography variant="subtitle2" className={classes.message} color="textSecondary">You haven't searched for anything yet.</Typography>
        }
        </>
    )
}