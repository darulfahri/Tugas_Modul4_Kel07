import React from 'react';
import './App.css';
import ListNamaMobilList from './components/ListMobil';
import Context from './components/Usecontext/Context'

function App() {
  return (
    <div className='listNamaMobil-app'>
      <Context />
      <ListNamaMobilList />
    </div>
  );
}

export default App;