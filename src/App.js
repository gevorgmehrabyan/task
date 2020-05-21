import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
