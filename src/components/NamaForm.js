import React, { useState, useEffect, useRef } from 'react';

function NamaForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='nama-form'>
      {props.edit ? (
        <>
          <input
            placeholder=''
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='nama-input edit'
          />
          <button onClick={handleSubmit} className='nama-button edit'>
            Edit
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Masukkan Nama'
            value={input}
            onChange={handleChange}
            name='text'
            className='nama-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='nama-button'>
            Tambah
          </button>
        </>
      )}
    </form>
  );
}

export default NamaForm;