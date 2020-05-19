import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Home />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
