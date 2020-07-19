import React, {useState} from 'react';

// Component imports
import TopBar from './components/TopBar'
import HeaderArea from './components/HeaderArea'
import NewsGrid from './components/NewsGrid'
import SideDrawer from './components/SideDrawer';

// Material-ui imports
import {CssBaseline, Container} from '@material-ui/core'
import {ThemeProvider, createMuiTheme, makeStyles} from '@material-ui/core/styles';
import {pink, grey, blue, blueGrey} from '@material-ui/core/colors'

// Context imports
import {NewsProvider} from './context/NewsContext';
import {LoadingProvider} from './context/LoadingContext';
import { RecentProvider } from './context/RecentContext';
import { HeadingProvider } from './context/HeadingContext';

// Custom hooks imports
import useLocalStorage from './hooks/useLocalStorage';


function App() {
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useLocalStorage('darkMode',false);
  const handleDrawerOpen = (open) => setIsDrawerOpen(open)
  
  
  const theme = createMuiTheme({
    palette: {
      type: darkMode? 'dark': 'light',
      primary: {
        main: darkMode ? blueGrey[100] : blueGrey[900]
      },
      secondary:{
        main: darkMode ? grey[800] :grey[100] 
      },
      background: {
        paper: darkMode?grey['A400']: '#fff' 
        
      }
    },
    shape: {
      borderRadius: 2
    }, typography: {
      fontFamily: [
        'Inter',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h6: {
        fontSize: '1.2rem'
      },
      body2: {
        fontSize: '.9rem'
      },
      caption: {
        fontSize: '.8rem',
          
      }
    },
  });
  
  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundColor : darkMode? grey[900] : grey[50], 
      color: theme.palette.getContrastText(darkMode ? grey[900] : grey[50])
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
    <CssBaseline/>
        <ThemeProvider theme={theme}>
          <TopBar setDrawerOpen={handleDrawerOpen} toggleDarkMode={setDarkMode} darkMode={darkMode}/>
          <LoadingProvider>
            <NewsProvider>
              <HeadingProvider>
                <RecentProvider>
                <SideDrawer open={isDrawerOpen} setOpen={handleDrawerOpen}/> 
                <Container maxWidth="lg">
                  <HeaderArea/> 
                  <NewsGrid darkMode={darkMode}/>
                </Container>  
                
              </RecentProvider>
            </HeadingProvider>
          </NewsProvider>
        </LoadingProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
