import React, { useState, useEffect, useRef } from 'react';

function ListMobilForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(
        () => {
          console.log("sedang mengatur data")
        },
      )

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

    return ( <form onSubmit = { handleSubmit }
        className = 'listNamaMobil-form' > {
            props.edit ? ( 
                <>
                <input placeholder = ''
                value = { input }
                onChange = { handleChange }
                name = 'text'
                ref = { inputRef }
                className = 'listNamaMobil-input edit' /
                >
                <button onClick = { handleSubmit }
                className = 'listNamaMobil-button edit' >
                Edit </button> 
                </>
            ) : ( 
            <>
                <input placeholder = 'Masukan Nama Mobil'
                value = { input }
                onChange = { handleChange }
                name = 'text'
                className = 'listNamaMobil-input'
                ref = { inputRef }
                /> <button onClick = { handleSubmit }
                className = 'listNamaMobil-button' >
                Add </button> 
                </>
            )
        } 
        </form>
    );
}

export default ListMobilForm;