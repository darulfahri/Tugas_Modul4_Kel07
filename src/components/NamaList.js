import React, { useState } from 'react';
import NamaForm from './NamaForm';
import Nama from './Nama';

function NamaList() {
  const [namas, setNamas] = useState([]);

  const addNama = nama => {
    if (!nama.text || /^\s*$/.test(nama.text)) {
      return;
    }

    const newNamas = [nama, ...namas];

    setNamas(newNamas);
    console.log(...namas);
  };

  const updateNama = (namaId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setNamas(prev => prev.map(item => (item.id === namaId ? newValue : item)));
  };

  const removeNama = id => {
    const removedArr = [...namas].filter(nama => nama.id !== id);

    setNamas(removedArr);
  };

  const completeNama = id => {
    let updatedNamas = namas.map(nama => {
      if (nama.id === id) {
        nama.isComplete = !nama.isComplete;
      }
      return nama;
    });
    setNamas(updatedNamas);
  };

  return (
    <>
      <h1></h1>
      <NamaForm onSubmit={addNama} />
      <Nama
        namas={namas}
        completeNama={completeNama}
        removeNama={removeNama}
        updateNama={updateNama}
      />
    </>
  );
}

export default NamaList;