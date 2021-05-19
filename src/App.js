import React from 'react';

import { Box } from '@chakra-ui/react';

import Header from './components/Header';
import BackProject from './components/BackProject';
import Statistics from './components/Statistics';
import About from './components/About';

function App() {
  return (
    <Box>
      <Header />
      <BackProject />
      <Statistics />
      <About />
    </Box>
  );
}

export default App;
