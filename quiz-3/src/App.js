import './App.css';
import React from 'react';
import style from './../src/App.module.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ManageData from './pages/ManageData';
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar className={style.container}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/manage-data' element={<ManageData/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
