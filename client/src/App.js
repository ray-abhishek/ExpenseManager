import React from 'react';
import './App.css';
import Links from './Links/Links'
import Routes from './Routes/Routes'
import AppProvider from './AppContext/AppContext'
import Footer from './Components/Small/Footer'

function App() {
  return (
    <AppProvider>
    <div className="container-fluid">
        <Links />
        <Routes />
        <Footer />
    </div>
    </AppProvider>
  );
}

export default App;
