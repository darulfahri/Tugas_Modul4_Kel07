import React, { useState } from 'react';
import ListMobilForm from './ListMobilForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const ListNamaMobil = ({ listNamaMobils, completeListNamaMobil, removeListNamaMobil, updateListNamaMobil }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateListNamaMobil(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <ListMobilForm edit = { edit }
        onSubmit = { submitUpdate }
        />;
    }

    return listNamaMobils.map((listNamaMobil, index) => ( 
        <div className = { listNamaMobil.isComplete ? 'listNamaMobil-row complete' : 'listNamaMobil-row' }
        key = { index } >
        <div key = { ListNamaMobil.id }
        onClick = {
            () => completeListNamaMobil(listNamaMobil.id)
        } > { listNamaMobil.text } </div> 
        <div className = 'icons' >
        <
        RiCloseCircleLine onClick = {
            () => removeListNamaMobil(listNamaMobil.id)
        }
        className = 'delete-icon' /
        >
        <
        TiEdit onClick = {
            () => setEdit({ id: listNamaMobil.id, value: listNamaMobil.text })
        }
        className = 'edit-icon' /
        >
        </div> </div>
    ));
};

export default ListNamaMobil;