import React from 'react';
import './App.css';
import NamaList from './components/NamaList';
import Context from './components/Usecontext/Context'

function App() {
  return (
    <div className='nama-app'>
      <Context />
      <NamaList />
    </div>
  );
}

export default App;