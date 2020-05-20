import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Router from './router';

function App() {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
