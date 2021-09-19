import React, { useState } from 'react';
import NamaForm from './NamaForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Nama = ({ namas, completeNama, removeNama, updateNama }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateNama(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <NamaForm edit={edit} onSubmit={submitUpdate} />;
  }

  return namas.map((nama, index) => (
    <div
      className={nama.isComplete ? 'nama-row complete' : 'nama-row'}
      key={index}
    >
      <div key={nama.id} onClick={() => completeNama(nama.id)}>
        {nama.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeNama(nama.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: nama.id, value: nama.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Nama;