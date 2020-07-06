import React, {useState, useEffect, useCallback} from 'react';

import TopBar from './components/TopBar'
import HeaderArea from './components/HeaderArea'
import NewsGrid from './components/NewsGrid'

import {GlobalProvider} from './context/GlobalContext';

import {CssBaseline, Container} from '@material-ui/core'




function App() {

  return (
    <>
    <CssBaseline/>
      <GlobalProvider>
        <TopBar/>
        <Container maxWidth="lg">
          <HeaderArea/>
          <NewsGrid/>
      </Container>
    </GlobalProvider>
    </>
  );
}

export default App;
