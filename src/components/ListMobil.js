import React, { useState } from 'react';
import ListNamaMobilForm from './ListMobilForm';
import ListNamaMobil from './ListNamaMobil';

function ListNamaMobilList() {
    const [listNamaMobils, setListNamaMobils] = useState([]);

    const addListNamaMobil = listNamaMobil => {
        if (!listNamaMobil.text || /^\s*$/.test(listNamaMobil.text)) {
            return;
        }

        const newlistNamaMobils = [listNamaMobil, ...listNamaMobils];

        setListNamaMobils(newlistNamaMobils);
        console.log(...listNamaMobils);
    };

    const updateListNamaMobil = (listNamaMobilId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setListNamaMobils(prev => prev.map(item => (item.id === listNamaMobilId ? newValue : item)));
    };

    const removeListNamaMobil = id => {
        const removedArr = [...listNamaMobils].filter(listNamaMobil => listNamaMobil.id !== id);

        setListNamaMobils(removedArr);
    };

    const completeListNamaMobil = id => {
        let updatedListNamaMobils = listNamaMobils.map(listNamaMobil => {
            if (listNamaMobil.id === id) {
                listNamaMobil.isComplete = !listNamaMobil.isComplete;
            }
            return listNamaMobil;
        });
        setListNamaMobils(updatedListNamaMobils);
    };

    return ( <>
        <h1 > kelompok 7 "List Data Mobil" </h1> 
        <ListNamaMobilForm onSubmit = { addListNamaMobil }
        /> 
        <ListNamaMobil listNamaMobils = { listNamaMobils }
        completeListNamaMobil = { completeListNamaMobil }
        removeListNamaMobil = { removeListNamaMobil }
        updateListNamaMobil = { updateListNamaMobil }
        /> </>
    );
}

export default ListNamaMobilList;