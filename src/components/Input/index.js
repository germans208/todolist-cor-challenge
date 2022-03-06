import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';


const Input = ({ addItem }) => {
    const [value, setValue] = useState('');

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        addItem(value)
        setValue('');
    }, [setValue, addItem, value]);

    return (
        <form onSubmit={onSubmit}>
            <input value={value} placeholder="Titulo" />
            <input value={value} placeholder="Prioridad" />
            <input value={value} placeholder="Estado" />
            <input value={value} placeholder="Descripcion" onChange={(e) => setValue(e.target.value)} />

            <button>Crear tarea</button>
        </form>
    )
}

//Disparador de Acciones
const mapDispatchToProps = (dispatch) => {
    return ({
        addItem: (value) => {
            dispatch({ type: 'ADD_ITEM', payload: { item: value } })
        }
    })
}

export default connect(null, mapDispatchToProps)(Input);
