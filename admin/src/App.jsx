// App.jsx
import React from 'react';
import Header from './home/Header.jsx'
import Footer from './home/Footer.jsx'
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="flex overflow-hidden ">
      <div className="">
        <Header/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
