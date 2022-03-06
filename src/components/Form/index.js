import { Paper } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import Select from '../Select';

const Form = ({ addItem }) => {
    const [value, setValue] = useState('');

    const onSubmit = useCallback((e) => {
        debugger
        e.preventDefault();
        addItem(value)
        setValue('');
    }, [setValue, addItem, value]);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <Paper style={{ width: '90%', leftMargin: '15px' }}>
                    <div style={{ marginLeft: '10px' }} >

                        <input type="text" value={value} placeholder="Titulo" />
                        <input type="text" value={value} placeholder="Prioridad" />
                        <input type="text" value={value} placeholder="Estado" />

                        <Select value={value} onChange={(e) => setValue(e.target.value)} />

                        <textarea 
                            type="text" 
                            value={value} 
                            placeholder="Descripcion" 
                            onChange={(e) => setValue(e.target.value)} 
                        />
                    </div>
                </Paper>
                <br />
                <button>Crear tarea</button>

            </form>

        </div>

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

export default connect(null, mapDispatchToProps)(Form);
