import React from 'react';
import './App.css';

import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='container'>
      <Header></Header>
      <SideBar user="10"></SideBar>
    </div>
  );
}

export default App;
